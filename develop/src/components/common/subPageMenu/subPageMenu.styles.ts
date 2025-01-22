import styled from "@emotion/styled"

export const SubPageMenuWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
  height: 400px;
  background-color: #a6b0e0;
`

export const SubContentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const NaviWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
`

export const SubMenuButton = styled.button`
  display: inline-block;
  font-weight: bold;
  vertical-align: middle;
  color: #fff;
`
export const HomeIcon = styled.img`
  display: inline-block;
  vertical-align: text-bottom;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

export const NaviText = styled.span`
  display: inline-block;
  font-weight: bold;
  vertical-align: middle;
`
export const ArrowIcon = styled.span`
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 0px -1284px;
    background-image: url(./images/sprite.png);
    width: 6px;
    height: 9px;
`

export const PageName = styled.div`
  margin-top: 60px;
  font-size: 40px;
  color: #fff;
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
  height: 80%;
`