import { useState } from "react"
import * as A from "./navigation.styles"


export default function Navigation():JSX.Element {

  const [menuState, setMenuState] = useState({
    first: false,
    second: false,
    third: false,
  });

  const FirstsubMenu = [
      {name:"경기지역화폐란?"},
      {name:"카드"},
      {name:"모바일"},
      {name:"지류"}
    ]

    const SecsubMenu = [
      {name:"가맹점신규등록"},
      {name:"가맹점 등록안내"},
      {name:"상권분석서비스"}
    ]

    const ThrsubMenu = [
      {name:"가맹점찾기"},
      {name:"할인가맹점"},
      {name:"차별거래점신고"},
    ]

  const toggleMenu = (menuKey: "first" | "second" | "third") => {
    setMenuState({
      first: false,
      second: false,
      third: false,
      [menuKey]: !menuState[menuKey], // 클릭된 메뉴는 토글
    });

  };

  return (
    <>
      <A.NavigationWrap>
        <A.MenuWrap>
          <A.NavigationButton  onClick={() => toggleMenu("first")}>경기지역화폐</A.NavigationButton>
          <A.SubMenuWrap isopen={menuState.first}>
            {
              FirstsubMenu.map((el) => (
                <A.subMenuList  key={el.name} >{el.name}</A.subMenuList>
              ))
            }
          </A.SubMenuWrap>
        </A.MenuWrap>

        <A.MenuWrap>
          <A.NavigationButton onClick={() => toggleMenu("second")}>가맹점이용안내</A.NavigationButton>
          <A.SubMenuWrap isopen={menuState.second}>
            {
              SecsubMenu.map((el) => (
                <A.subMenuList  key={el.name} >{el.name}</A.subMenuList>
              ))
            }
          </A.SubMenuWrap>
        </A.MenuWrap>

        <A.MenuWrap>
          <A.NavigationButton onClick={() => toggleMenu("third")}>우리동네가맹점</A.NavigationButton>
          <A.SubMenuWrap isopen={menuState.third}>
            {
              ThrsubMenu.map((el) => (
                <A.subMenuList  key={el.name} >{el.name}</A.subMenuList>
              ))
            }
          </A.SubMenuWrap>
        </A.MenuWrap>
      </A.NavigationWrap>
    </>
  )
}