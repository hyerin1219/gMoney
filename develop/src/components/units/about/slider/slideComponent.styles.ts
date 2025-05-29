import styled from "@emotion/styled"

interface IsDirectionProps {
  direction: string;
}

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const SliderWrap = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`

export const SliderTrack = styled.ul<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 100}%)`};
  width: ${({ $currentIndex }) => `${$currentIndex + 1}00%`}; // 안정적 렌더링 위해
`;

export const SliderBox = styled.li`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  
`
export const SliderPrevButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 100%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-image: url(/images/button_prev.png);
  background-size: 100% 100%;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  @media(max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`

export const SliderNextButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-image: url(/images/button_next.png);
  background-size: 100% 100%;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
  
  @media(max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`

export const SlideImg = styled.img`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 90%;
  object-fit: contain;
  margin: 0 auto;

`
export const SlideText = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;

  @media(max-width: 570px) {
    font-size: 16px;
  }
`
