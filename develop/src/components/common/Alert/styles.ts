import styled from '@emotion/styled';

export const AlertBox = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;
export const AlertContent = styled.div`
    background: #fff;
    padding: 50px;
    border-radius: 8px;
    min-width: 280px;
    text-align: center;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
`;

export const AlertMessage = styled.p`
    font-size: 20px;
    text-color: #c56b43;
`;
export const AlertButton = styled.button`
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
