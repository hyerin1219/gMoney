import styled from "@emotion/styled"
import FormControl from '@mui/material/FormControl';

export const contentWrap = styled.div`
  padding: 50px 0px;
  margin: 0 auto;
`
export const MapBox = styled.div`
  width: 59%;
  height: 600px;
  margin: 20px auto;
  background-color: tan;

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 450px;
  }
`

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`
export const relsultWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 5px;
  }
`

export const SearchInput = styled.input`
  width: 60%;
  height: 55px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  outline: none;
  padding: 10px 20px;
  font-size: 18px;
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
`

export const SearchButton = styled.button`
  flex-shrink: 0;
  width: 55px;
  height: 55px;
  background-image: url("../images/ico_search.png");
  background-size: 100% 100%;
`

export const FormControlBox = styled(FormControl)`
  width: 200px;
`

// 리스트 표

export const ListWrap = styled.div`
  height: 600px;
  width: 40%;
  padding: 10px;
  overflow: hidden;
  padding: 15px;
  border: 2px solid #83b871;

  @media (max-width: 1000px) {
    width: 100%;
    height: 400px;
    padding: 10px;
  }
`

export const scrollBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 10px;

  ::-webkit-scrollbar{background-color: #d2e4c1; border-radius: 10px;}
  ::-webkit-scrollbar-thumb{background-color: #83b871; border-radius: 10px;}
  ::-webkit-scrollbar-button{display:none;}
`
export const ListBox = styled.div`
  display: flex;
  width: 100%;
`

// scrollBox

export const StoreList = styled.div`
  font-size: 18px;
  padding: 10px;

  :not(:last-child) {
    border-bottom: 1px solid #d2e4c1;
  }

  @media (max-width: 1000px) {
    font-size: 15px;
  }
`
export const StoreName = styled.p`
  font-weight: bold;
  margin-bottom: 3px;
`

export const StoreEtc = styled.p`
  font-size: 0.9em;

`