import { useEffect, useState } from "react"
import * as A from "./navigation.styles"
import { useRouter } from "next/router";
import { FirstsubMenu, SecsubMenu, ThrsubMenu } from "../../../../../common/stores/menuList";

export default function Navigation(): JSX.Element {

  const router = useRouter()

  useEffect(() => {
    // 페이지가 변경될 때 메뉴 상태를 초기화
    const handleRouteChange = () => {
      setMenuState({
        first: false,
        second: false,
        third: false,
      });
    };

    // 라우터 이벤트에 핸들러 등록
    router.events.on("routeChangeStart", handleRouteChange);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const [menuState, setMenuState] = useState({
    first: false,
    second: false,
    third: false,
  });

  // 메뉴를 토글하는 함수
  const toggleMenu = (menuKey: "first" | "second" | "third") => {
    setMenuState((prevState) => ({
      first: false,
      second: false,
      third: false,
      [menuKey]: !prevState[menuKey], // 클릭된 메뉴는 토글
    }));
  };

  // 서브 메뉴 클릭 시 페이지 변경
  const onClickMenu = (event: any): void => {
    event.preventDefault(); // 기본 링크 동작 방지
    router.push(`./${event.currentTarget.id}`); // 클릭된 메뉴의 id로 페이지 이동
  };


  return (
    <>
      <A.NavigationWrap>
        <A.MenuWrap>
          <A.NavigationButton isActive={true} onClick={() => toggleMenu("first")}>경기지역화폐</A.NavigationButton>
          <A.SubMenuWrap isopen={menuState.first}>
            {FirstsubMenu.map((el) => (
              <A.subMenuList onClick={onClickMenu} id={el.src} key={el.name}>{el.name}</A.subMenuList>
            ))}
          </A.SubMenuWrap>
        </A.MenuWrap>

        <A.MenuWrap>
          <A.NavigationButton isActive={false} onClick={() => toggleMenu("second")}>가맹점이용안내</A.NavigationButton>
          <A.SubMenuWrap isopen={menuState.second}>
            {SecsubMenu.map((el) => (
              <A.subMenuList key={el.name}>{el.name}</A.subMenuList>
            ))}
          </A.SubMenuWrap>
        </A.MenuWrap>

        <A.MenuWrap>
          <A.NavigationButton isActive={true} onClick={() => toggleMenu("third")}>우리동네가맹점</A.NavigationButton>
          <A.SubMenuWrap isopen={menuState.third}>
            {ThrsubMenu.map((el) => (
              <A.subMenuList onClick={onClickMenu} id={el.src} key={el.name}>{el.name}</A.subMenuList>
            ))}
          </A.SubMenuWrap>
        </A.MenuWrap>
      </A.NavigationWrap>
    </>
  )
}
