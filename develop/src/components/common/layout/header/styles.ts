import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    height: 55px;
    padding: 10px 30px;
    background-color: #243d34;
    border-radius: 15px;
    color: #edebe5;

    @media (max-width: 500px) {
        padding: 10px 20px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const PageLogo = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;
export const LoginWrap = styled.div``;

export const LoginButton = styled.button`
    font-size: 15px;
    color: #edebe5;

    @media (max-width: 500px) {
        font-size: 13px;
    }
`;

export const KakaoButton = styled.button`
    width: calc(366px / 2);
    height: calc(90px / 2);
    background-image: url(./images/button_login_kakao.png);
    background-size: 100% 100%;
`;

export const UserWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const UserBox = styled.span`
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 500px) {
        font-size: 13px;
    }
`;

export const MenuBox = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 500px) {
        gap: 10px;
    }
`;
export const MenuItem = styled.button`
    color: #edebe5;
    font-size: 18px;

    @media (max-width: 500px) {
        font-size: 15px;
    }
`;
