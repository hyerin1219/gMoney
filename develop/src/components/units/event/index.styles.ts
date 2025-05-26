import styled from "@emotion/styled"

export const ContentWrap = styled.div`
`
export const GameContainer = styled.div`
  margin: 30px 0;
`
export const GameBox = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  border: 8px solid #cede89;
  box-shadow: 5px 5px 2px #afc93e;
  border-radius: 100%;
  margin: 0 auto;
`

export const GameContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(./images/event/main.png);
  background-size: 100% 100%;
`

export const StartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(631px / 2.5);
  height: calc(385px / 2.5);
  background-image: url(./images/event/button_start.png);
  background-size: 100% 100%;

  :hover {
    width: calc(631px / 2);
    height: calc(385px / 2);
  }
`

export const ArrowIco = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(317px / 2.5);
  height: calc(501px / 2.5);
  background-image: url(./images/event/ico_arrow.png);
  background-size: 100% 100%;
`