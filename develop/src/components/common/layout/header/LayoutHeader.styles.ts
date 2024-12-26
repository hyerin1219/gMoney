import styled from "@emotion/styled"

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
    padding: 0.8% 5%;
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
