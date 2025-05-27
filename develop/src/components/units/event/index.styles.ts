import styled from "@emotion/styled"

export const ContentWrap = styled.div`
`
export const GameContainer = styled.div`
  margin: 30px 0;
`
export const MainText = styled.h2`
  font-size: 40px;
  text-align: center;
`

export const GameBox = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  border: 8px solid #cede89;
  box-shadow: 5px 5px 2px #afc93e;
  border-radius: 100%;
  margin: 50px auto;
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
  left: 41%;
  width: calc(317px / 2.5);
  height: calc(501px / 2.5);
  background-image: url(./images/event/ico_arrow.png);
  background-size: 100% 100%;
  z-index: 1;

  animation: ${(props: IisSpinningProps) => props.isSpinning ? "Move 0.6s infinite ease-in-out" : "none"};
  transform-origin: top  center;

  @keyframes Move {
  0%   { transform: rotate(15deg) ; }
  25%  { transform: rotate(0deg) ; }
  50%  { transform: rotate(-15deg) ; }
  75%  { transform: rotate(0deg) ; }
  100% { transform: rotate(15deg) ; }
}
`

/*ResultText*/
export const ResultText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 500px;
    display: flex;
    justify-content: center;
    font-size: 80px;
    text-align: center;
    transform: translate(-50%, -50%);
    animation: fadeIn 1s ease;
    background-color: #f7f7f7;
    border-radius: 20px;
    z-index: 100;
    overflow: hidden;
    padding-top: 80px;

    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px) translate(-50%, -50%); }
        to { opacity: 1; transform: translateY(0) translate(-50%, -50%); }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    bottom: 40px;
    left: 50%;
    border-radius: 20px;
    padding: 10px 50px;
    background: #ff7d7d url(images/btn_close.png) no-repeat  center / 30px 30px;
    color: #fff;
    font-size: 30px;
    transform: translateX(-50%);
    box-shadow: 3px 3px 1px #f75e5e;
`

export const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  background-color: #ff7d7d;
`

export const NodalHeaderBall = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 100%;
`

// type
interface IisSpinningProps {
  isSpinning: boolean;
}


