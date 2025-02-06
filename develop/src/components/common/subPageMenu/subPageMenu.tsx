import { useRouter } from "next/router";
import * as A from "./subPageMenu.styles";

interface SubPageMenuProps {
  subMenuTitle: any;
  index: number;
  menuTitle: string;
  src: string;
}

export default function SubPageMenuComponent(props: SubPageMenuProps): JSX.Element {
  const router = useRouter();

  const onClickHome = () => {
    router.push("./");
  };

  const menuName = props.subMenuTitle[props.index]?.name;

  return (
    <>
      <A.SubPageMenuWrap>
        <A.SubContentBox>
          <A.NaviWrap>
            <A.SubMenuButton onClick={onClickHome}>
              <A.HomeIcon src="./images/home_white.png"></A.HomeIcon>
              HOME
            </A.SubMenuButton>
            <A.ArrowIcon></A.ArrowIcon>
            <A.NaviText>{props.menuTitle}</A.NaviText>
            <A.ArrowIcon></A.ArrowIcon>
            <A.NaviText>{menuName}</A.NaviText>
          </A.NaviWrap>

          <A.PageName>
            경기도 지역화폐 <A.PageNameEm>{menuName}</A.PageNameEm>입니다.
          </A.PageName>

          <A.PageImg src={props.src} />
        </A.SubContentBox>
      </A.SubPageMenuWrap>
    </>
  );
}
