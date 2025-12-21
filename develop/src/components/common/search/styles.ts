import styled from '@emotion/styled';

export const SearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 14px;
    font-size: 14px;
    color: #222;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    background-color: #fff;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
`;

export const SearchButton = styled.button`
    height: 44px;
    padding: 0 20px;
    font-size: 14px;
    border-radius: 10px;
    background: #c56b43;
    color: #fff;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-3px);
    }

    &:disabled {
        background: #e3e8ff;
        color: #8fa1ff;
        box-shadow: none;
        cursor: not-allowed;
    }
`;
