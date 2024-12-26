import styled from "@emotion/styled"



export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const SearchInput = styled.input`
  width: 60%;
  height: 55px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  outline: none;
  padding: 10px 20px;
  font-size: 30px;
  ::-webkit-input-placeholder {
    font-size: 25px;
  }
`

export const SearchButton = styled.button`
  width: 55px;
  height: 55px;
  background-image: url("../images/ico_search.png");
  background-size: 100% 100%;
`