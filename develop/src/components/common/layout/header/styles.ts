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

export const PageLogo = styled.h1`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;
export const LoginWrap = styled.div``;
export const LoginBox = styled.div`
    position: relative;
`;

export const LogOutBox = styled.div`
    position: absolute;
    top: 30px;
    left: 50%;
    width: 100px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    transform: translateX(-50%);
`;

export const LogoutButton = styled.button`
    font-size: 15px;
    padding: 5px 0;
    border-bottom: 2px solid transparent;

    :hover {
        border-color: #243d34;
    }

    @media (max-width: 500px) {
        font-size: 13px;
    }
`;
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

export const UserBox = styled.button`
    font-size: 20px;
    font-weight: bold;
    color: #edebe5;

    @media (max-width: 500px) {
        font-size: 13px;
    }
`;

export const MenuBox = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;
export const MenuItem = styled.button`
    color: #edebe5;
    font-size: 18px;

    @media (max-width: 530px) {
        font-size: 15px;
    }
`;
export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

// mobile menu
export const HamMenuButton = styled.button`
    position: relative;
    display: none;
    width: 20px;
    height: 20px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: #fff;
        transition: all 0.3s;
    }
    &::before {
        top: 5px;
    }
    &::after {
        bottom: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }

    &:hover {
        &::before {
            top: 0px;
        }
        &::after {
            bottom: 0px;
        }
    }
`;

interface IMobileDrawerProps {
    isMobileMenuOpen: boolean;
}

export const MobileDrawer = styled.div<IMobileDrawerProps>`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;

    opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 1 : 0)};
    visibility: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'visible' : 'hidden')};
    pointer-events: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s;
`;

export const MobileBox = styled.div<IMobileDrawerProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

    transform: translateX(${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
`;
export const CloseButton = styled.button`
    position: relative;
    width: 24px;
    height: 24px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 24px;
        background-color: #333;
        transition: all 0.3s;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }

    &:hover {
        &::before {
            transform: rotate(90deg);
        }
        &::after {
            transform: rotate(-90deg);
        }
    }
`;

export const MobileMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-center center;
    align-items: flex-start;
    
    margin-top: 30px;
`;
export const MobileMenuItem = styled.button`
    width: 100%;
    font-size: 20px;
    padding: 15px 10px;
    border-radius: 5px;
    text-align: left;

    &:hover {
        background-color: #333333;
        color: #fff;
    }
    @media (max-width: 530px) {
        font-size: 15px;
    }
`;
