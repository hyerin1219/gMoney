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

  const onClickPrev = ():void => {
    
  }

  const onClickNext = ():void => {

  }
  return (
    <>
      <A.SliderContainer>
        <A.SliderPrevButton onClick={onClickPrev}>이전</A.SliderPrevButton>
        <A.SliderWrap>
          {
            slideContent.map((el) => (
              <A.SliderBox key={el.text}>
                
              </A.SliderBox>
            ))
          }
          
        </A.SliderWrap>
        <A.SliderNextButton onClick={onClickNext}>다음</A.SliderNextButton>
      </A.SliderContainer>
    </>
  )
}