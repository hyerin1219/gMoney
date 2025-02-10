import SubPageMenuComponent from '../../common/subPageMenu/subPageMenu';
import { Login } from '../../../common/stores/menuList';

export default function LoginComponent():JSX.Element {
  
  return (
    <>
      <div className="Container">
        <SubPageMenuComponent
            subMenuTitle={Login}
            index={0}
            menuTitle={"로그인"}
            src={"./images/bg_submenu03.png"}
        />

      </div>
    </>
  )

}