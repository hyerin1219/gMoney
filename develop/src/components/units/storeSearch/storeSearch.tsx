import SearchComponent from "../../common/search/searchComponent";
import * as A from "./searchComponent.styles"

export default function StoreSearchComponent():JSX.Element{

  return (
    <>
      <A.contentWrap>
        <SearchComponent></SearchComponent>
      </A.contentWrap>
    </>
  )
}