import { ChangeEvent } from 'react';

import * as A from './styles';

import Search from '../search';

import { SelectChangeEvent } from '@mui/material/Select';

import { IAction, IState } from '../../../common/stores/types';
import { REGION_LIST } from '../../../common/stores/region';

interface RegionSearchProps {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}

export default function RegionSearch({ state, dispatch }: RegionSearchProps) {
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

    return (
        <A.SearchWrap>
            <A.StyledFormControl>
                <A.StyledInputLabel id="region-select-label">지역</A.StyledInputLabel>

                <A.StyledSelect labelId="region-select-label" id="region-select" value={state.region} label="지역" onChange={handleRegionChange}>
                    {REGION_LIST.map((el) => (
                        <A.StyledMenuItem key={el.name} value={el.name}>
                            {el.name}
                        </A.StyledMenuItem>
                    ))}
                </A.StyledSelect>
            </A.StyledFormControl>

            {/* search input, button */}
            <Search value={state.textValue} onChange={onChangeTextValue} onSearch={handleSearchClick} placeholder="검색어를 입력하세요." />
        </A.SearchWrap>
    );
}
