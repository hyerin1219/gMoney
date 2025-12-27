import styled from '@emotion/styled';

import FormControl from '@mui/material/FormControl';

interface IStarProps {
    onClick: () => Promise<void>;
    star: boolean;
}

interface IInduTypeButtonProps {
    active: boolean;
}

// map
export const MapBox = styled.div`
    width: 59%;
    height: 600px;
    margin: 0 auto;
    background-color: #ddd;

    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        height: 450px;
    }
`;

// search
export const SearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
`;

export const FormControlBox = styled(FormControl)`
    width: 200px;
`;

// InduTypeBox

export const InduTypeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const InduTypeButton = styled.button<IInduTypeButtonProps>`
    padding: 8px 18px;
    border-radius: 15px;
    font-size: 15px;
    cursor: pointer;

    background-color: #d2e4c1;

    color: ${({ active }) => (active ? '#fff' : '#000')};
    background-color: ${({ active }) => (active ? '#243d34' : '#d2e4c1')};

    transition: all 0.2s ease;

    &:hover {
        background-color: #243d34;
        color: #fff;
    }
`;

// 리스트 표
export const resultWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 5px;
    }
`;

export const ListWrap = styled.div`
    height: 600px;
    width: 40%;
    padding: 10px;
    overflow: hidden;
    padding: 15px;
    border: 3px solid #c56b43;
    border-radius: 10px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 400px;
        padding: 10px;
    }
`;

// scrollBox
export const ScrollBox = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-right: 10px;

    ::-webkit-scrollbar {
        background-color: #d2e4c1;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #243d34;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
`;

export const StoreList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 10px;

    :not(:last-child) {
        border-bottom: 1px solid #d2e4c1;
    }

    @media (max-width: 1000px) {
        font-size: 15px;
    }
`;
export const StoreName = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const StoreEtc = styled.p`
    font-size: 0.9em;

    :not(:last-child) {
        margin-bottom: 3px;
    }
`;

// 즐겨찾기

export const BookMark = styled.button`
    width: 30px;
    height: 30px;
    background-image: url(/images/icon_star.png);
    background-size: 100% 100%;
    filter: ${(props: IStarProps) => (props.star ? 'grayscale(0)' : 'grayscale(100)')};
    background-size: 100% 100%;

    :hover {
        filter: grayscale(0);
    }
`;
