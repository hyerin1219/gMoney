import { FirstsubMenu } from "../../../common/stores/menuList";
import SlideComponent from "./slider/sliderComponet";
import SubPageMenuComponent from "../../common/subPageMenu/subPageMenu";
import * as A from "./index.styles"

export default function AboutComponent(): JSX.Element {
  
  return (
    <>
      <div className="Container">
        <SubPageMenuComponent
            subMenuTitle={FirstsubMenu}
            index={0}
            menuTitle={"경기지역화폐란?"}
            src={"./images/bg_submenu03.png"}
          />

        <A.ContentWrap>
          
          <A.ABoutText>경기지역화폐</A.ABoutText>

          <A.AboutTitleBox>
            <A.ABoutTitleText>
              전통시장 및 소상공인의 실질적 매출 증대, 지역경제 선순환 도모를 위해 경기도 31개 시·군에서 발행하고 지역내에서 사용하는 대안화폐
            </A.ABoutTitleText>

            <A.AboutTitleImg src="./images/img01.png"/>
          </A.AboutTitleBox>

          <A.ABoutText>경기지역화폐 사용처</A.ABoutText>

          <A.SliderBox>
            <SlideComponent />
          </A.SliderBox>

          
        </A.ContentWrap>
        
        </div>
    </>
  )
}