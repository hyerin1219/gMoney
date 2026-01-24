import styled from '@emotion/styled';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export const MainBox = styled.div`
    width: 100%;
`;

export const GuideBox = styled.div`
    width: 100%;
    text-align: right;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;

    @media (max-width: 910px) {
        font-size: 12px;
    }
`;
export const GuideBoxEm = styled.em`
    color: red;
    margin-right: 5px;
`;

export const ContentBox = styled.div`
    border-top: 2px solid #83b871;
    border-bottom: 2px solid #83b871;
    padding: 10px 0px;
`;

export const ContentList = styled.div`
    position: relative;
    // display: flex;
    // justify-content: space-between;
    font-size: 20px;
    // :not(:last-child) {
    //     border-bottom: 2px solid #ccc;
    // }

    @media (max-width: 910px) {
        font-size: 15px;
    }
`;
export const ListTitle = styled.div`
    display: flex;
    align-items: flex-start;
    font-weight: bold;
    padding: 10px;
    // background-color: #d2e4c1;
    @media (max-width: 790px) {
        padding: 5px;
        word-break: keep-all;
    }
`;
export const ListBox = styled.div`
    width: 100%;
    padding: 5px;
`;
export const ListFelxBox = styled.div`
    display: flex;
    align-items: center;
`;
export const ListInput = styled.input`
    border-radius: 5px;
    border: 2px solid #ccc;
    font-size: 1em;
    outline: none;
    padding: 5px;
    width: 100%;

    :not(:first-of-type) {
        margin-top: 5px;
    }

    // @media (max-width: 550px) {
    //     width: 70%;
    //     min-width: auto;
    // }
`;

export const ListTextarea = styled.textarea`
    border-radius: 10px;
    border: 2px solid #ccc;
    font-size: 1em;
    outline: none;
    padding: 5px;
    width: 100%;

    resize: none;
`;

export const ListButton = styled.button`
    flex-shrink: 0;
    background-color: #2a2f33;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;

    @media (max-width: 790px) {
        border-radius: 5px;
        margin-left: 5px;
    }
`;

export const submitButton = styled.button`
    display: block;
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
    margin: 20px auto 0;

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

export const ErrorBox = styled.div`
    color: red;
    height: 20px;
    margin-top: 5px;
`;

export const MarginBox = styled.div`
    margin: 0.5em 0;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const GMoneyBox = styled.div``;
