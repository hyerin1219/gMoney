import {  useState } from "react"
import * as A from "./slideComponent.styles"

export default function SlideComponent():JSX.Element {

  const slideContent = [
      {src: "./images/slide/slide_item01.png" , text: "주유소"},
      {src: "./images/slide/slide_item02.png" , text: "전통시장, 골목상권"},
      {src: "./images/slide/slide_item03.png" , text: "레저업소(헬스클럽)"},
      {src: "./images/slide/slide_item04.png" , text: "병/의원"},
      {src: "./images/slide/slide_item05.png" , text: "편의점"},
      {src: "./images/slide/slide_item06.png" , text: "학원"},
      {src: "./images/slide/slide_item07.png" , text: "보건위생 (안경, 미용원 등)"},
      {src: "./images/slide/slide_item08.png" , text: "기타의료기관 (동물병원 등)"},
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
      <A.SliderPrevButton onClick={onClickPrev} disabled={currentIndex === 0} />
      <A.SliderWrap>
        <A.SliderTrack $currentIndex={currentIndex}>
          {slideContent.map((item, index) => (
            <A.SliderBox key={item.text}>
              <A.SlideImg src={item.src} />
              <A.SlideText>{item.text}</A.SlideText>
            </A.SliderBox>
          ))}
        </A.SliderTrack>
      </A.SliderWrap>
      <A.SliderNextButton onClick={onClickNext} disabled={currentIndex === 7} />
    </A.SliderContainer>
    </>
  )
}