import styled from "@emotion/styled"

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
    padding: 0.8% 5%;
    background-color: #fff;
    `

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const PageLogo = styled.div`
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #6a78bb;
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
export const userBox = styled.div`
    font-size: 22px;
    font-weight: bold;
`