import * as A from "./navigation.styles"

export default function Navigation():JSX.Element {
  return (
    <>
      <A.NavigationWrap>
        <A.NavigationButton>경기지역화폐</A.NavigationButton>
        <A.NavigationButton>가맹점이용안내</A.NavigationButton>
        <A.NavigationButton>우리동네가맹점</A.NavigationButton>
      </A.NavigationWrap>
    </>
  )
}