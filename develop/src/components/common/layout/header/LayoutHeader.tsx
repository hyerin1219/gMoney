import { JSX } from "react"
import * as A from "./LayoutHeader.styles"

export default function LayoutHeader():JSX.Element {
  return (
    <>
      <A.HeaderWrapper>
        <A.HeaderContent>
          <A.PageLogo>경기 지역 화폐</A.PageLogo>
        </A.HeaderContent>
      </A.HeaderWrapper>
    </>
  )
}