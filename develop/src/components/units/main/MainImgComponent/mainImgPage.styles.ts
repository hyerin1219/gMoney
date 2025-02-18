import styled from "@emotion/styled"

//  공통 레이아웃
export const ContentWrap = styled.div`
  padding: 50px 0;
  margin: 0 auto;
  @media(max-width: 1285px) {
    padding: 30px 0;
  }
`


// 이미지 영역
export const MainImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  border-radius: 35px;
  background-color: #a6b0e0;
  padding: 100px ;

  @media(max-width: 1510px) {
    padding: 55px ;
  }

  @media(max-width: 825px) {
    padding: 30px ;
  }
`

export const ImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 65%;

  @media(max-width: 1510px) {
    height: 40%;
  }

  @media(max-width: 825px) {
    display: none;
  }
`
export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`


// 이미지 영역 - 텍스트
export const TextWrap = styled.div`
  font-size: 80px;
  word-break: keep-all;
  @media(max-width: 1510px) {
    font-size: 60px;
  }
  @media(max-width: 825px) {
    font-size: 45px;
  }

  @media(max-width: 575px) {
    font-size: 35px;
  }
`

export const MainText = styled.div`
  position: relative;
  font-size: 1em;
  font-weight: bold;
  margin: 0.3em 0;
  color: #fff;

  @media(max-width: 575px) {
      color: #6a78bb;
    }

  ::after {
    content: "경기지역화폐";
    position: absolute;
    top: 2px;
    left: -4px;
    color: #6a78bb;

    @media(max-width: 575px) {
      display: none;
    }
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

  @media(max-width: 825px) {
    display: none;
  }
`

export const ViewMoreButton = styled.button`
  display: inline-block;
  width: 140px;
  height: 140px;
  background-color: #6a78bb;
  border-radius: 100%;
  color: #fff;
  font-size: 0.25em;
  margin-top: 1em;
  transition: all 0.8s;
  box-shadow: 0 0 6px rgba(0,0,0,0.4);

  :hover {
    transform: rotate(360deg);
  }

  @media(max-width: 1510px) {
    width: 100px;
    height: 100px;
  }

  @media(max-width: 575px) {
    width: fit-content;
    height: 30px;
    border-radius: 20px;
    padding: 10px;
    :hover {
    transform: rotate(0);
  }
  }
`
