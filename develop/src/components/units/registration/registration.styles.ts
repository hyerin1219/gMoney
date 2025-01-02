import styled from "@emotion/styled"
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export const ContentWrap = styled.div`
  padding: 50px 0px;
  margin: 0 auto;
`

export const MainBox = styled.div`
  width: 100%;
`

export const GuideBox = styled.div`
  width: 100%;
  text-align: right;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
`
export const GuideBoxEm = styled.em`
  font-size: 15px;
  color: red;
  margin-right: 5px;
`

export const ContentBox = styled.div`
  border-top: 2px solid #83b871;
  border-bottom: 2px solid #83b871;
`

export const ContentList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  
  :not(:last-child) {
    border-bottom: 2px solid #ccc;
  }
`
export const ListTitle = styled.div`
  width: 20%;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #d2e4c1;
`
export const ListBox = styled.div`
  width: 79%;
  padding: 5px;
`
export const ListInput = styled.input`
  border-radius: 10px;
  border: 2px solid #ccc;
  font-size: 20px;
  outline: none;
  padding: 5px;
  width: 700px;
`
export const ListButton = styled.button`
  background-color: #2a2f33;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
`
export const submitButton = styled.button`
  display: block;
  background-color: #2a2f33;
  color: #fff;
  font-size: 22px;
  border-radius: 10px;
  padding: 15px;
  margin: 10px auto;
`

export const ErrorBox = styled.div`
  font-size: 15px;
  color: red;
  height: 20px;
  margin-top: 5px;
`

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
