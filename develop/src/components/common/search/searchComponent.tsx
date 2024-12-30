import { ChangeEvent, useState } from "react"
import * as A from "./searchComponent.styles"
import axios from "axios"
import { useRouter } from "next/router";
const { parseStringPromise } = require('xml2js');

export default function SearchComponent():JSX.Element {

  const router = useRouter()

  const onChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log (value)
  }

  const  onClickStoreList = async ():Promise<void> => {
    const result = await axios.get("https://openapi.gg.go.kr/RegionMnyFacltStus")
    const jsonData = await parseStringPromise(result.data, { explicitArray: false });

    
  }
  return (
    <>
      <A.SearchWrap>
        <A.SearchInput onChange={onChangeValue} type='text' placeholder='검색어를 입력하세요.'/>
        <A.SearchButton onClick={onClickStoreList} />
      </A.SearchWrap>
    </>
  )
}