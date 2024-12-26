import * as A from "./searchComponent.styles"

export default function SearchComponent():JSX.Element {
  return (
    <>
      <A.SearchWrap>
        <A.SearchInput type='text' placeholder='검색어를 입력하세요.'/>
        <A.SearchButton />
      </A.SearchWrap>
    </>
  )
}