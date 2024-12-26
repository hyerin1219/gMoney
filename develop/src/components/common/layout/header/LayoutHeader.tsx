import * as A from "./LayoutHeader.styles"
import Navigation from "./navigation/navigation"

export default function LayoutHeader():JSX.Element {
  return (
    <>
      <A.HeaderWrapper>
        <A.HeaderContent>
          <A.PageLogo>경기 지역 화폐</A.PageLogo>

          <A.LoginWrap>
            <A.LoginButton>로그인</A.LoginButton>
          </A.LoginWrap>
        </A.HeaderContent>

        <Navigation></Navigation>
      </A.HeaderWrapper>
    </>
  )
}