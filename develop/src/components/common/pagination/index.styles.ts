import styled from "@emotion/styled";

// pagination

export const PaginationWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 10px;
    height: 50px;
`;
export const PageNumber = styled.button`
    cursor: pointer;
    font-size: 20px;
    // color: ${(props: IPageNumberProps) => (props.isActive ? "#83b871" : "#000")};
`;
export const PageNumberNone = styled.button`
    cursor: pointer;
    font-size: 20px;
    opacity: 0;
`;

export const PageButton = styled.button`
  cursor: pointer;
  font-size: 20px;
`



interface IPageNumberProps {
    isActive: boolean;
}
