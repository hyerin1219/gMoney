import {  useState } from "react"
import * as A from "./slideComponent.styles"

export default function SlideComponent():JSX.Element {

  const slideContent = [
      {src: "1" , text: "주유소"},
      {src: "2" , text: "전통시장, 골목상권"},
      {src: "3" , text: "레저업소(헬스클럽)"},
      {src: "4" , text: "병/의원"},
      {src: "5" , text: "편의점"},
      {src: "6" , text: "학원"},
      {src: "7" , text: "보건위생 (안경, 미용원 등)"},
      {src: "8" , text: "기타의료기관 (동물병원 등)"},
    ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIndex = slideContent.length
  const [direction, setDirection] = useState<string>("next")

  const onClickPrev = ():void => {
    setDirection("prev")
    setCurrentIndex((prev) => (prev === 0 ? slideIndex - 1 : prev - 1));
  }

  const onClickNext = ():void => {
    setDirection("next")
    setCurrentIndex((prev) => (prev === slideIndex - 1 ? 0 : prev + 1));
  }

  return (
    <>
      <A.SliderContainer>
        <A.SliderPrevButton onClick={onClickPrev}></A.SliderPrevButton>
        <A.SliderWrap>
          <A.SliderBox key={slideContent[currentIndex].text} direction={direction}>
            <A.SlideImg src={`./images/slide/slide_item0${slideContent[currentIndex].src}.png`} />
            <A.SlideText>{slideContent[currentIndex].text}</A.SlideText>
          </A.SliderBox>
        </A.SliderWrap>
        <A.SliderNextButton onClick={onClickNext}></A.SliderNextButton>
      </A.SliderContainer>
    </>
  )
}