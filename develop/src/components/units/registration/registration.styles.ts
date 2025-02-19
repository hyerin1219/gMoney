import styled from "@emotion/styled"
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export const ContentWrap = styled.div`
  padding: 2rem 0px;
  margin: 0 auto;
`

export const MainBox = styled.div`
  width: 100%;
`

export const GuideBox = styled.div`
  width: 100%;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;

  @media (max-width: 910px ) {
    font-size: 12px;
  }
`
export const GuideBoxEm = styled.em`
  color: red;
  margin-right: 5px;
`

export const GuidBoxDiv = styled.div`
  color: red;
  font-size: 0.8em;
`

export const ContentBox = styled.div`
  border-top: 2px solid #83b871;
  border-bottom: 2px solid #83b871;
`

export const ContentList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  :not(:last-child) {
    border-bottom: 2px solid #ccc;
  }

  @media (max-width: 910px ) {
    font-size: 15px;
  }
`
export const ListTitle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 20%;
  font-weight: bold;
  padding: 10px;
  background-color: #d2e4c1;
  @media (max-width: 790px) {
    padding: 5px;
    word-break: keep-all;
  }
`
export const ListBox = styled.div`
  width: 79%;
  padding: 5px;

  
`
export const ListFelxBox = styled.div`
  display: flex;
  align-items: center;
`
export const ListInput = styled.input`
  border-radius: 10px;
  border: 2px solid #ccc;
  font-size: 1em;
  outline: none;
  padding: 5px;
  width: 50%;
  min-width: 250px;

  :not(:first-of-type) {margin-top:5px;}

  @media (max-width: 550px ) {
    width: 70%;
    min-width: auto;
  }
`

export const ListTextarea = styled.textarea`
  border-radius: 10px;
  border: 2px solid #ccc;
  font-size: 1em;
  outline: none;
  padding: 5px;
  width: 50%;
  min-width: 250px;

  resize: none;

  
`

export const ListButton = styled.button`
  background-color: #2a2f33;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;

  @media (max-width: 790px) {
    font-size: 0.6em;
    padding: 5px;
    border-radius: 5px;
    margin-left: 5px;
  }
`
export const submitButton = styled.button`
  position: relative;
  display: block;
  background-color: #2a2f33;
  color: #fff;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 20px auto 0;
  z-index: 5;
  
  @media (max-width: 790px) {
    font-size: 1em;
  }

  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`

export const ErrorBox = styled.div`
  font-size: 0.5em;
  color: red;
  height: 20px;
  margin-top: 5px;
`

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;


export const GMoneyBox = styled.div`
  
`