import SubPageMenuComponent from '../../common/subPageMenu/subPageMenu';
import { Login } from '../../../common/stores/menuList';
import { useEffect, useState } from "react";
import * as A from "./login.styles";
import { useRouter } from 'next/router';


export default function LoginComponent(): JSX.Element {


  return (
    <>
      <div className="Container">
        <SubPageMenuComponent
            subMenuTitle={Login}
            index={0}
            menuTitle={"로그인"}
            src={"./images/bg_submenu03.png"}
        />

        <A.ButtonWrap>
          {/* <A.KakaoButton onClick={handleLogin}/> */}
        </A.ButtonWrap>

      </div>

      
    </>
  )

}