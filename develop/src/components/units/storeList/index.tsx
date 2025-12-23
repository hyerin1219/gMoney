import { useEffect, useReducer, useState } from 'react';

import * as A from './styles';

import RegionSearch from '../../common/select';

import { IAction, IBusinessInfo, initialState, IState } from '../../../common/stores/types';

import { useBookmark } from '../../../hooks/useBookmark';
import { useKakaoMap } from '../../../hooks/useKakaoMap';
import { INDUTYPE } from '../../../common/stores/indutpye';

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
    const { star, onClickStar } = useBookmark();
    const { mapRef, initMap, updateMarkers } = useKakaoMap();
    const [selectedInduType, setSelectedInduType] = useState<string | null>(null);

    useEffect(() => {
        if (!state.region) {
            initMap('map');
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&SIGUN_NM=${state.region}`);
                const result = await response.json();
                const infoData = result.RegionMnyFacltStus[1].row.filter((store: IBusinessInfo) => store.SIGUN_NM === state.region && store.LEAD_TAX_MAN_STATE_CD !== '03');
                dispatch({ type: 'SET_INFO', payload: infoData });
                initMap('map'); // 지역 선택 시 지도 초기화
                updateMarkers(infoData);

                console.log('infoData', infoData);
            } catch (err) {
                console.error('데이터 불러오기 실패', err);
            }
        };
        fetchData();
    }, [state.region]);

    useEffect(() => {
        if (!mapRef.current) return;
        const filteredData = state.searchTerm ? state.info.filter((store) => store.CMPNM_NM.includes(state.searchTerm)) : state.info;
        updateMarkers(filteredData);
    }, [state.info, state.searchTerm]);

    const filteredStores = state.info.filter((store) => {
        if (!state.region) return false;

        // 검색어
        if (state.searchTerm && !store.CMPNM_NM.includes(state.searchTerm)) {
            return false;
        }

        // 업종
        if (selectedInduType) {
            const category = INDUTYPE.find((el) => el.title === selectedInduType);
            if (!category) return false;

            const code = store.INDUTYPE_CD;
            if (!category.typeNumbers.includes(code)) {
                return false;
            }
        }

        return true;
    });

    //
    useEffect(() => {
        if (!mapRef.current) return;

        updateMarkers(filteredStores);
    }, [filteredStores]);

    return (
        <section className="Wrap">
            <RegionSearch state={state} dispatch={dispatch} />

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
                    <A.ScrollBox>
                        {!state.region ? (
                            <div>지역을 선택하세요.</div>
                        ) : filteredStores.length ? (
                            filteredStores.map((el) => (
                                <A.StoreList key={el.BIZREGNO}>
                                    <div>
                                        <A.StoreName>{el.CMPNM_NM}</A.StoreName>
                                        <A.StoreEtc>{el.INDUTYPE_NM}</A.StoreEtc>
                                        <A.StoreEtc>{el.REFINE_ROADNM_ADDR}</A.StoreEtc>
                                    </div>
                                    <A.BookMark onClick={() => onClickStar(el.BIZREGNO)} star={star[el.BIZREGNO] || false} />
                                </A.StoreList>
                            ))
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
