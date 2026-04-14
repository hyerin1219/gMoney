import styled from '@emotion/styled';
import { Space } from 'antd';

export const FooterWrapper = styled.footer`
    background-color: #2a2f33;
    background-color: #0a2422;
`;

export const FooterContent = styled.div`
    width: 100%;
    font-size: 15px;
    padding: 1em 2em;

    @media (max-width: 950px) {
        font-size: 12px;
    }
`;
export const FooterContentTopArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    color: #ccc;
    padding: 20px;
`;
export const FooterText = styled.div`
    color: #ccc;
    margin: 8px 0;
`;
