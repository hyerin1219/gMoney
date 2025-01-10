import { useRouter } from "next/router"
import * as A from "./LayoutHeader.styles"
import Navigation from "./navigation/navigation"

export default function LayoutHeader():JSX.Element {

  const router = useRouter()

  const onClickLogo = ():void => {
    void router.push("/")
  }
  return (
    <>
      <A.HeaderWrapper>
        <A.HeaderContent>
          <A.PageLogo onClick={onClickLogo}>경기 지역 화폐</A.PageLogo>

          <A.LoginWrap>
            <A.LoginButton>로그인</A.LoginButton>
          </A.LoginWrap>
        </A.HeaderContent>

        <Navigation></Navigation>
      </A.HeaderWrapper>
    </>
  )
}