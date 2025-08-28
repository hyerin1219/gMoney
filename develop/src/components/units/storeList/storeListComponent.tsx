import { ChangeEvent, useEffect, useReducer } from 'react';

import * as A from './storeList.styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

import { IBusinessInfo } from '../../../common/stores/types';
import { ThrsubMenu } from '../../../common/stores/menuList';
import SubPageMenuComponent from '../../common/subPageMenu/subPageMenu';
import { REGION_LIST } from '../../../common/stores/region';

import { useBookmark } from '../../../hooks/useBookmark';
import { useKakaoMap } from '../../../hooks/useKakaoMap';

// 상태 타입 정의
interface State {
    region: string;
    textValue: string;
    searchTerm: string;
    info: IBusinessInfo[];
}

// 액션 타입 정의
type Action = { type: 'SET_REGION'; payload: string } | { type: 'SET_TEXT_VALUE'; payload: string } | { type: 'SET_SEARCH_TERM'; payload: string } | { type: 'SET_INFO'; payload: IBusinessInfo[] };

// 초기 상태
const initialState: State = {
    region: '',
    textValue: '',
    searchTerm: '',
    info: [],
};

// 리듀서
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_REGION':
            return { ...state, region: action.payload, textValue: '', searchTerm: '' };
        case 'SET_TEXT_VALUE':
            return { ...state, textValue: action.payload };
        case 'SET_SEARCH_TERM':
            return { ...state, searchTerm: action.payload };
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

    // 지역 선택
    const handleRegionChange = (event: SelectChangeEvent) => {
        dispatch({ type: 'SET_REGION', payload: event.target.value });
    };

    // 입력 값 변경
    const onChangeTextValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_TEXT_VALUE', payload: event.target.value });
    };

    // 검색 버튼 클릭
    const handleSearchClick = () => {
        dispatch({ type: 'SET_SEARCH_TERM', payload: state.textValue });
    };

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

    return (
        <div className="Container">
            <SubPageMenuComponent subMenuTitle={ThrsubMenu} index={0} menuTitle="우리동네가맹점" src="./images/bg_submenu02.png" />

            <A.contentWrap>
                <A.SearchWrap>
                    <A.FormControlBox>
                        <InputLabel id="region-select-label">지역</InputLabel>
                        <Select labelId="region-select-label" id="region-select" value={state.region} label="지역" onChange={handleRegionChange}>
                            {REGION_LIST.map((el) => (
                                <MenuItem key={el.name} value={el.name}>
                                    {el.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </A.FormControlBox>

                    <A.SearchInput value={state.textValue} onChange={onChangeTextValue} type="text" placeholder="검색어를 입력하세요." />
                    <A.SearchButton onClick={handleSearchClick} />
                </A.SearchWrap>

                <A.resultWrap>
                    <A.ListWrap>
                        <A.scrollBox>
                            {state.region ? (
                                (state.searchTerm ? state.info.filter((store) => store.CMPNM_NM.includes(state.searchTerm)) : state.info).map((el) => (
                                    <A.StoreList key={el.BIZREGNO}>
                                        <div>
                                            <A.StoreName>{el.CMPNM_NM}</A.StoreName>
                                            <A.StoreEtc>{el.INDUTYPE_NM}</A.StoreEtc>
                                            <A.StoreEtc>{el.REFINE_ROADNM_ADDR}</A.StoreEtc>
                                        </div>
                                        <A.bookMark onClick={() => onClickStar(el.BIZREGNO)} star={star[el.BIZREGNO] || false} />
                                    </A.StoreList>
                                ))
                            ) : (
                                <div>지역을 선택하세요.</div>
                            )}
                        </A.scrollBox>
                    </A.ListWrap>

                    <A.MapBox id="map"></A.MapBox>
                </A.resultWrap>
            </A.contentWrap>
        </div>
    );
}
