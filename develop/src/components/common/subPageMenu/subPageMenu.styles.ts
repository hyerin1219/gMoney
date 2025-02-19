import styled from "@emotion/styled"

export const SubPageMenuWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  height: 400px;
  background-color: #a6b0e0;

  @media (max-width: 1600px) {
    height: 300px;
  }
  @media (max-width: 950px) {
    height: 200px;
  }
  @media (max-width: 500px) {
    height: 170px;
  }
`

export const SubContentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`

export const NaviWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
`

export const SubMenuButton = styled.button`
  display: inline-block;
  font-weight: bold;
  vertical-align: middle;
  color: #fff;
  @media (max-width: 500px) {
    display: none;
  }
`
export const HomeIcon = styled.img`
  display: inline-block;
  vertical-align: text-bottom;
  width: 1rem;
  height: 1rem;
  margin-right: 5px;
  
`

export const NaviText = styled.span`
  display: inline-block;
  font-weight: bold;
  vertical-align: middle;
  @media (max-width: 1000px) {
    font-size: 0.8em;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
export const ArrowIcon = styled.span`
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 0px -1284px;
    background-image: url(./images/sprite.png);
    width: 6px;
    height: 9px;

    @media (max-width: 500px) {
    display: none;
  }
`

export const PageName = styled.div`
  margin-top: 2em;
  font-size: 2.5rem;
  color: #fff;
  word-break: keep-all;

  @media (max-width: 1600px) {
    font-size: 2rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.3rem;
  }

  @media (max-width: 500px) {
    margin-top: 1em;
  }

`
export const PageNameEm = styled.span`
  color: #6a78bb;
  font-weight: bold;
  font-size: 1.5em;
`

export const PageImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 50px;
  object-fit: contain;
  width: auto;
  height: 70%;

  @media (max-width: 950px) {
    display: none;
  }
`