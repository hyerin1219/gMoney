import styled from "@emotion/styled"

export const ContentWrap = styled.div`
  padding: 50px 0;
  margin: 0 auto;

@media(max-width: 1285px) {
    padding: 30px 0;
  }
`

export const ABoutText = styled.div`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin: 1.5em 0;
  word-break: keep-all;

  @media(max-width: 900px) {
    font-size: 30px;
    margin: 0.8em 0;
  }
`

export const AboutTitleBox = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-color: #fff6db;
    z-index: -1;
  }

`
export const AboutTitleImg = styled.img`
  flex-shrink: 0;
  width: 1000px;
  @media(max-width: 1070px) {
    width: 600px;
  }
  @media(max-width: 570px) {
    width: 400px;
  }
`
export const ABoutTitleText = styled.div`
  font-size: 22px;
  text-align: center;
  @media(max-width: 570px) {
    font-size: 16px;
  }
`

export const SliderBox = styled.div`
  position: relative;
  width: 90%;
  height: max-content;
  margin: 30px auto 0;
  max-width: 800px;
`