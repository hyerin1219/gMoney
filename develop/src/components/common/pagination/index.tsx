import { useState } from "react";
import * as A from './index.styles'

interface IPageNumberProps {
  isActive: boolean;
}


export default function PagerComponent(): JSX.Element {

  const [pageIndex, setPageIndex] = useState(1)
  const [isActive, setIsActive] = useState(false)

  // ====페이지네이션======
  const onClickPage = () => {
    setPageIndex(pageIndex + 1)
    setIsActive(true)
  }

  // 페이지 이전 버튼
  const onClickPrevPage = () => {
    if(pageIndex === 1) return

    setPageIndex(pageIndex - 10)
  }

  // 페이지 다음 버튼
  const onClickNextPage = () => {
    setPageIndex(pageIndex + 10)
  }


  return (
    <A.PaginationWrap>
        <A.PageButton onClick={onClickPrevPage}>이전</A.PageButton>
          {[...Array(10)].map((_, index) => (
            <A.PageNumber
              key={index}
              onClick={onClickPage}
              isActive={isActive}
            >
              {index + 1}
            </A.PageNumber>
          ))}
          <A.PageButton onClick={onClickNextPage}>다음</A.PageButton>
        </A.PaginationWrap>
  );
}

