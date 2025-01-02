import { ChangeEvent, useState } from "react"
import * as A from "./searchComponent.styles"
import axios from "axios"
import { Modal } from 'antd';


const { parseStringPromise } = require('xml2js');

export default function SearchComponent():JSX.Element {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const onChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log (value)
  }


  const  onClickStoreList = async ():Promise<void> => {
    
    try {
      const result = await axios.get("https://openapi.gg.go.kr/RegionMnyFacltStus");
      const jsonData = await parseStringPromise(result.data, { explicitArray: false });


    } catch (error) {
        if (error instanceof Error) {
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleCancel}>
          {error.message}
        </Modal>
        }
    }
    
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