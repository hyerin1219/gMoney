import styled from "@emotion/styled"

export const ContentWrap = styled.div`
  padding: 50px 0;
  margin: 0 auto;

`

export const ABoutText = styled.div`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin: 50px 0;
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
`
export const ABoutTitleText = styled.div`
  font-size: 22px;
  text-align: center;
`

export const SliderBox = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  margin: 30px auto 0;
`