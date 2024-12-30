import styled from "@emotion/styled"

//  공통 레이아웃
export const ContentWrap = styled.div`
  padding: 50px 0;
  margin: 0 auto;
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
  padding: 20px 0;
  border-radius: 30px;
`

export const ListButtonImg = styled.img`
  display: inline-block;
  width: 54px;
  height: 54px;
  object-fit: contain;
`