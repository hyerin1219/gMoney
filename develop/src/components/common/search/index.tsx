import { ChangeEvent, useEffect, useState } from "react"
import * as A from "./searchComponent.styles"

export default function SearchComponent():JSX.Element {

  const onChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log (value)
  }

  return (
    <>
      <A.SearchWrap>
        <A.SearchInput onChange={onChangeValue} type='text' placeholder='검색어를 입력하세요.'/>
        <A.SearchButton />
      </A.SearchWrap>
    </>
  )
}