import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Interface } from "readline"
import { boolean } from "yup"

//  공통 레이아웃
export const ContentWrap = styled.div`
  padding: 50px 0;
  margin: 0 auto;

  @media(max-width: 1285px) {
    padding: 30px 0;
  }
`

export const ListButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`

export const  ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(calc(100% - 50px) / 4);
  background-color: #fff6db;
  gap: 10px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px 10px;
  border-radius: 30px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);



  @media(max-width: 1285px) {
    font-size: 18px;
  }

  @media(max-width: 819px) {
    width: calc(calc(100% - 50px) / 2);
  }

  @media(max-width: 819px) {
    width: 100%;
    padding: 15px 0;
  }
`

export const ListButtonImg = styled.img`
  display: inline-block;
  width: 50px;
  height: 50px;
  object-fit: contain;

  @media(max-width: 1285px) {
    width: 20px;
    height: 20px;
  }

  @media(max-width: 925px) {
    width: 20px;
    height: 20px;
  }
`
