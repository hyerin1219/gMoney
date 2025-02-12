import styled from "@emotion/styled"

export const SliderContainer = styled.div`
  position: relative;
  background-color: tan;
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
export const SliderBox = styled.li`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`
export const SliderPrevButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -50px;
  cursor: pointer;
`

export const SliderNextButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -50px;
  cursor: pointer;
`

export const SlideImg = styled.img``