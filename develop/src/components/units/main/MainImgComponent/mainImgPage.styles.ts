import styled from "@emotion/styled"

//  공통 레이아웃
export const ContentWrap = styled.div`
  padding: 50px 0;
  margin: 0 auto;
`


// 이미지 영역
export const MainImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 750px;
  border-radius: 35px;
  background-color: #a6b0e0;
  padding: 100px ;
`

export const ImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 686px;
  height: 505px;
`
export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`

// 이미지 영역 - 스크롤 다운
export const IconWrap = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 50px;
  height: 50px;
  background-image: url(./images/ico_mouse.png);
  background-size: 100% 100%;
  transform: translateX(-50%);
`
export const ScrollDownArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: -40px;
  width: 45px;
  height: 45px;
  background-image: url(./images/ico_arrow_down.png);
  background-size: 100% 100%;
  transform: translateX(-50%);
  animation: ScrollDownArrow 1.2s infinite;

  @keyframes ScrollDownArrow {
    0% {bottom: -50px;}
    50% {bottom: -40px;}
    100% {bottom: -50px;}
  }
`
// 이미지 영역 - 텍스트
export const TextWrap = styled.div`
  font-size: 80px;
`

export const MainText = styled.div`
  position: relative;
  font-size: 1em;
  font-weight: bold;
  margin: 0.3em 0;
  color: #fff;

  ::after {
    content: "경기지역화폐";
    position: absolute;
    top: 2px;
    left: -4px;
    color: #6a78bb;
  }
`
export const SubText = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  color: #fff;
`
export const SubSmallText = styled.div`
  font-size: 0.3em;
  color: #fff;
`

export const ViewMoreButton = styled.button`
  display: inline-block;
  width: 140px;
  height: 140px;
  background-color: #6a78bb;
  border-radius: 100%;
  color: #fff;
  font-size: 0.25em;
  margin-top: 50px;
  transition: all 0.8s;
  box-shadow: 0 0 6px rgba(0,0,0,0.4);

  :hover {
    transform: rotate(360deg);
  }
`
