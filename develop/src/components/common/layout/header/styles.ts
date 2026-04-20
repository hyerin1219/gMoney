import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
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
    padding: 3px 0;
    margin: 3px 0;
    border-bottom: 2px solid transparent;
    color: #333;
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
    font-size: 18px;
    font-weight: bold;
    color: #edebe5;

    @media (max-width: 500px) {
        font-size: 13px;
    }
`;

export const MenuBox = styled.ul`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;
export const MenuItem = styled.div`
    color: #edebe5;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    button {
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        cursor: pointer;
    }

    &:hover {
        color: #fff;
    }
`;

export const SubMenuItem = styled.li`
    font-size: 14px;
    color: #333;
    padding: 10px 20px;
    transition: all 0.2s;

    &:hover {
        color: #243d34;
        font-weight: bold;
    }
`;

export const SubMenuContent = styled.div`
    position: relative;
`;
export const SubMenuBox = styled.ul`
    position: absolute;
    left: 50%;
    top: calc(100% + 5px);
    display: flex;
    flex-direction: column;
    width: 150px;
    text-align: center;
    padding: 8px 0;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateX(-50%);
    z-index: 100;
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

export const MobileMenuBox = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 30px;
`;
export const MobileMenuItem = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 10px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;

    button {
        background: none;
        border: none;
        width: 100%;
        text-align: left;
        font: inherit;
    }
`;
export const MobileSubMenuBox = styled.ul`
    background-color: #f8f9fa;
    width: 100%;
    overflow: hidden;
`;

export const MobileSubMenuItem = styled.li`
    padding: 12px 25px;
    font-size: 15px;
    color: #666;
    border-bottom: 1px solid #f1f1f1;

    &:active {
        background-color: #e9ecef;
    }
`;
