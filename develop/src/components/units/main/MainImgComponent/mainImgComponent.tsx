import * as A from "./mainImgPage.styles"
export default function MainImgComponents():JSX.Element {
  return (
    <>
      <div className="Container">
        <A.ContentWrap>
          <A.MainImgWrap>

            <A.TextWrap>
              <A.SubText>쓰면 쓸수록 경기,돕니다.</A.SubText>
              <A.MainText>경기지역화폐</A.MainText>
              <A.SubSmallText>
                경기지역화폐는 지역경제 활성화를 위해 31개 시,군에서<br/>
                발행하고 사용하는 대안화폐입니다.
              </A.SubSmallText>

              <A.ViewMoreButton>자세히 보기</A.ViewMoreButton>
            </A.TextWrap>

            <A.ImgWrap>
              <A.ImgBox src="./images/main.png"/>
            </A.ImgWrap>

          </A.MainImgWrap>
        </A.ContentWrap>
      </div>
    </>
  )
}