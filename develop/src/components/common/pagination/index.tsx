import { useState } from "react";
import * as A from './index.styles';

interface IPageNumberProps {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function PagerComponent(props: IPageNumberProps): JSX.Element {
  const [startPage, setStartPage] = useState(1); // 현재 페이지 그룹의 시작 번호

  const onClickPage = (page: number) => () => {
    props.setPageIndex(page);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;

    setStartPage(prev => prev - 10);
    props.setPageIndex(startPage - 10); // 그룹 변경 시 첫 페이지로 이동
  };

  const onClickNextPage = () => {
    setStartPage(prev => prev + 10);
    props.setPageIndex(startPage + 10); // 그룹 변경 시 첫 페이지로 이동
  };

  return (
    <A.PaginationWrap>
      <A.PageButton onClick={onClickPrevPage}>이전</A.PageButton>
      {[...Array(10)].map((_, index) => {
        const page = startPage + index;
        return (
          <A.PageNumber
            key={page}
            onClick={onClickPage(page)}
            isActive={props.pageIndex === page}
          >
            {page}
          </A.PageNumber>
        );
      })}
      <A.PageButton onClick={onClickNextPage}>다음</A.PageButton>
    </A.PaginationWrap>
  );
}