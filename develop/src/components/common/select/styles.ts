import styled from '@emotion/styled';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectProps } from '@mui/material/Select';

export const SearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
`;

export const StyledFormControl = styled(FormControl)`
    width: 200px;
`;

export const StyledInputLabel = styled(InputLabel)`
    font-family: 'SchoolSafetyRoundedSmile';
    font-size: 15px;
`;

export const StyledSelect = styled(Select as React.ComponentType<SelectProps<string>>)`
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;

    .MuiSelect-select {
        padding: 13px;
    }
`;

export const StyledMenuItem = styled(MenuItem)`
    font-family: 'SchoolSafetyRoundedSmile';
    font-size: 15px;
`;
