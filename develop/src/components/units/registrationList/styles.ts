import styled from '@emotion/styled';

export const MainBox = styled.div`
    width: 100%;
    min-height: 650px;
`;

export const RegistrationListBox = styled.div`
    margin-top: 20px;
`;
export const RegistrationList = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 16px;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease-in-out;
    margin: 10px 0;

    &:hover {
        border-color: #c56b43;
        box-shadow: 0 4px 12px rgba(197, 107, 67, 0.1);
        transform: translateX(4px);
    }
`;
