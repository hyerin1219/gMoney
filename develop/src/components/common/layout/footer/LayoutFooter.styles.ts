import styled from "@emotion/styled"
import { Space } from 'antd';

export const FooterWrapper = styled.div`
    background-color: #2a2f33;
    `

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 15px;
    padding: 1em 2em;

    @media (max-width: 950px) {
        font-size: 12px;
    }
`
export const FooterContentTopArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    color: #ccc;
    padding: 20px;
` 

export const SpaceBox = styled(Space)`
    cursor: pointer;
    width: 200px;
`;

export const DropdownWrap = styled.div`
    position: relative;
    @media (max-width: 700px) {
        display: none;
    }
`