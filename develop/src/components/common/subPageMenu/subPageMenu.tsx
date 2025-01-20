import { useRouter } from "next/router"
import * as A from "./subPageMenu.styles"

export default function SubPageMenuComponent():JSX.Element {

  const router = useRouter()

const onClickHome = () => {
  router.push("./")
}


  return (
    <>
      <A.SubPageMenuWrap>

        <A.SubMenuButton onClick={onClickHome}>
          <A.HomeIcon src="./images/home.png" ></A.HomeIcon>
          HOME
        </A.SubMenuButton>

        

      </A.SubPageMenuWrap>
    </>
  )

}