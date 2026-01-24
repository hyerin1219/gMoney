import { useEffect, useMemo, useReducer, useState } from 'react';

import * as A from './styles';

import RegionSearch from '../../common/select';

import { IAction, initialState, IState } from '../../../common/stores/types';
import { INDUTYPE } from '../../../common/stores/indutpye';

import { Bookmark } from './bookMark';
import { useKakaoMap } from '../../../hooks/useKakaoMap';
import { fetchStoreList } from '../../../hooks/useStoreList';
import { useBookmark } from '../../../hooks/useBookMark';

// 리듀서
function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        // 지역
        case 'SET_REGION':
            return { ...state, region: action.payload, textValue: '', searchTerm: '' };
        // 검색어
        case 'SET_TEXT_VALUE':
            return { ...state, textValue: action.payload };
        // 검색 버튼
        case 'SET_SEARCH_TERM':
            return { ...state, searchTerm: action.payload };
        // 가맹점 정보
        case 'SET_INFO':
            return { ...state, info: action.payload };
        default:
            return state;
    }
}

export default function StoreListComponent(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { mapRef, initMap, updateMarkers } = useKakaoMap();
    const [selectedInduType, setSelectedInduType] = useState<string | null>(null);

    // 페이지 스크롤
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const PAGE_SIZE = 20;

    // 북마크 관련
    const { regions } = useBookmark();
    const { star, onClickStar } = Bookmark();
    const isBookmarked = (region: string, storeId: string) => {
        return regions[region]?.some((store) => store.storeId === storeId) ?? false;
    };

    useEffect(() => {
        if (!state.region) {
            initMap('map');
            return;
        }

        setPage(1);
        setHasMore(true);

        fetchStoreList({
            region: state.region,
            page: 1,
            size: PAGE_SIZE,
        }).then((res) => {
            dispatch({ type: 'SET_INFO', payload: res.data });
            setSelectedInduType(null);

            if (res.data.length < PAGE_SIZE) {
                setHasMore(false);
            }
        });
    }, [state.region]);

    // 페이지 스크롤
    const loadMore = async () => {
        if (!hasMore) return;

        const nextPage = page + 1;

        const res = await fetchStoreList({
            region: state.region,
            page: nextPage,
            size: PAGE_SIZE,
        });

        dispatch({
            type: 'SET_INFO',
            payload: [...state.info, ...res.data],
        });

        setPage(nextPage);

        if (res.data.length < PAGE_SIZE) {
            setHasMore(false);
        }
    };

    const filteredStores = useMemo(() => {
        return state.info.filter((store) => {
            if (!state.region) return false;

            if (state.searchTerm && !store.CMPNM_NM.includes(state.searchTerm)) {
                return false;
            }

            if (selectedInduType) {
                const category = INDUTYPE.find((el) => el.title === selectedInduType);
                if (!category) return false;

                return category.typeNumbers.includes(store.INDUTYPE_CD);
            }

            return true;
        });
    }, [state.info, state.region, state.searchTerm, selectedInduType]);

    useEffect(() => {
        if (!mapRef.current) return;

        updateMarkers(filteredStores);
    }, [filteredStores]);

    return (
        <section className="Wrap">
            <RegionSearch state={state} dispatch={dispatch} setSelectedInduType={setSelectedInduType} />

            {state.region && (
                <A.InduTypeBox>
                    {/* 전체 버튼 */}
                    <A.InduTypeButton active={selectedInduType === null} onClick={() => setSelectedInduType(null)}>
                        전체
                    </A.InduTypeButton>

                    {/* 업종 버튼들 */}
                    {INDUTYPE.map((el) => (
                        <A.InduTypeButton key={el.title} active={selectedInduType === el.title} onClick={() => setSelectedInduType(selectedInduType === el.title ? null : el.title)}>
                            {el.title}
                        </A.InduTypeButton>
                    ))}
                </A.InduTypeBox>
            )}

            <A.resultWrap>
                <A.ListWrap>
                    <A.ScrollBox
                        onScroll={(e) => {
                            const target = e.currentTarget;

                            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 20) {
                                loadMore();
                            }
                        }}
                    >
                        {!state.region ? (
                            <div>지역을 선택하세요.</div>
                        ) : filteredStores.length ? (
                            filteredStores.map((el) => {
                                const storeKey = `${el.BIZREGNO}-${el.CMPNM_NM}`;

                                return (
                                    <A.StoreList key={storeKey}>
                                        <div>
                                            <A.StoreName>{el.CMPNM_NM}</A.StoreName>
                                            <A.StoreEtc>{el.INDUTYPE_NM}</A.StoreEtc>
                                            <A.StoreEtc>{el.REFINE_ROADNM_ADDR}</A.StoreEtc>
                                        </div>
                                        <A.BookMark onClick={() => onClickStar(el.SIGUN_NM, el.BIZREGNO, el.CMPNM_NM, el.REFINE_ROADNM_ADDR)} star={star[el.BIZREGNO] ?? isBookmarked(el.SIGUN_NM, el.BIZREGNO)} />
                                    </A.StoreList>
                                );
                            })
                        ) : (
                            <div>조건에 맞는 가맹점이 없습니다.</div>
                        )}
                    </A.ScrollBox>
                </A.ListWrap>

                <A.MapBox id="map"></A.MapBox>
            </A.resultWrap>
        </section>
    );
}
