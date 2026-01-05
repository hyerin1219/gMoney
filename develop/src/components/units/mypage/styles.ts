import styled from '@emotion/styled';

export const Content = styled.div`
    width: 100%;
`;
export const Title = styled.h3`
    font-size: 25px;
    margin-bottom: 20px;
`;

export const BookMark = styled.div`
    min-height: 550px;
    margin-top: 20px;
`;

export const BookMarkList = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
`;
export const Start = styled.img`
    width: 30px;
`;

export const RegionsButtonMark = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
export const RegionsButton = styled.button<{ active: boolean }>`
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

    background: ${({ active }) => (active ? '#c56b43' : '#ccc')};
    color: ${({ active }) => (active ? '#fff' : '#333')};

    &:hover {
        transform: translateY(-3px);
        background-color: #c56b43;
        color: #e3e8ff;
    }
`;
