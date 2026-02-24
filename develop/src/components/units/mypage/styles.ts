import styled from '@emotion/styled';

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 30px;
`;

export const SubTitle = styled.p`
    font-size: 1.3rem;
    margin-bottom: 20px;
`;

// 즐겨찾기 관련
export const BookMark = styled.div`
    min-height: 400px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const BookMarkList = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease-in-out;
    margin: 5px 0;

    &:hover {
        border-color: #c56b43;
        box-shadow: 0 4px 12px rgba(197, 107, 67, 0.1);
        transform: translateX(4px);
    }
`;

export const Star = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

export const RegionsButtonMark = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
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

export const NullStoreBox = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

export const DeletedButton = styled.button`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

// 차별거래 신고 관련
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
