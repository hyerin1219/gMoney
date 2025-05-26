import { FirstsubMenu } from "../../../common/stores/menuList";
import SlideComponent from "./slider";
import SubPageMenuComponent from "../../common/subPageMenu";
import * as A from "./index.styles"

export default function AboutComponent(): JSX.Element {

  return (
    <>
      <div className="Container">
        <SubPageMenuComponent
          subMenuTitle={FirstsubMenu}
          index={0}
          menuTitle={"경기지역화폐"}
          src={"./images/bg_submenu03.png"}
        />

        <A.ContentWrap>

          <A.ABoutText>경기지역화폐</A.ABoutText>

          <A.AboutTitleBox>
            <A.ABoutTitleText>
              전통시장 및 소상공인의 실질적 매출 증대, 지역경제 선순환 도모를 위해 경기도 31개 시·군에서 발행하고 지역내에서 사용하는 대안화폐
            </A.ABoutTitleText>

            <A.AboutTitleImg src="./images/img01.png" />
          </A.AboutTitleBox>

          <A.ABoutText>경기지역화폐 사용처</A.ABoutText>
          <A.ABoutTitleText>백화점, 대형마트, 기업형슈퍼마켓(SSM), 프랜차이즈 직영점 및 유흥 사행업소는 사용이 제한되며 연 매출 10억 이하인 소상공인 점포에서만 사용 가능합니다.</A.ABoutTitleText>

          <A.SliderBox>
            <SlideComponent />
          </A.SliderBox>


        </A.ContentWrap>

      </div>
    </>
  )
}