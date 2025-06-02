import styled from "@emotion/styled"

export const HeaderWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
    padding: 0.8% 5%;
    background-color: #fff;
    @media (max-width: 700px) {
        padding: 3% 5%;
    }
    `

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 700px) {
        margin-bottom: 0px;
    }
`

export const PageLogo = styled.div`
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #6a78bb;
    @media (max-width: 1500px) {
        font-size: 20px;
    }
`
export const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
`

export const LoginButton = styled.button`
    font-size: 22px;
    font-weight: bold;
    @media (max-width: 1500px) {
        font-size: 15px;
    }
`
export const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const KakaoButton = styled.button`
    width: calc(366px / 2);
    height: calc(90px / 2);
    background-image: url(./images/button_login_kakao.png);
    background-size: 100% 100%;
`
export const UserBox = styled.div`
    position: relative;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
`

export const UserMenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    background-color: #fff;

    opacity:  ${(props: IshowUserMenuProps) => props.showUserMenu ? "0" : "1"};
    pointer-events:  ${(props: IshowUserMenuProps) => props.showUserMenu ? "none" : "auto"};
`

export const UserMenuList = styled.li`
    font-size: 0.6em;
    text-align: center;
    margin: 5px 0;

    :hover{
        color: #6a78bb;
    }
`

interface IshowUserMenuProps {
    showUserMenu: boolean;
}