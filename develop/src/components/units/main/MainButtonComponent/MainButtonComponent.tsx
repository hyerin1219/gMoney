import { useRouter } from "next/router"
import * as A from "./MainButtonComponent.styles"
import type { MouseEvent } from "react"

export default function MainButtonComponent():JSX.Element {

  const router = useRouter()


  const onClickMenu = (event:MouseEvent<HTMLButtonElement>):void => {
        void router.push(event.currentTarget.id)
    }

    const ListButtonMenus = [
      {name:"차별거래 신고", page: "/registrationPage", src: "./images/ico_submit.png" },
      {name:"가맹점 찾기", page: "/storeSearchPage", src: "./images/ico_map.png" },
      {name:"이용 안내", page: "/", src: "./images/ico_information.png"},
      {name:"인센티브 현황", page: "/", src: "./images/ico_incentives.png"}
    ]

  return (
    <>
      <div className="Container">
        <A.ContentWrap>
          <A.ListButtonWrap>
            
            {
              ListButtonMenus.map((el) => (
                <A.ListButton onClick={onClickMenu} id={el.page} key={el.page}>
                  <A.ListButtonImg src={el.src}/>
                  <span>{el.name}</span>
                </A.ListButton>
              ))
            }

          </A.ListButtonWrap>
        </A.ContentWrap>
      </div>
    </>
  )
}