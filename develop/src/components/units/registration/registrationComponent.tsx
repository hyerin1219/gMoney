import { useEffect, useRef, useState } from "react";
import * as A from "./registration.styles"
import type { Address } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./registration.validation";
import { collection, addDoc, getFirestore } from 'firebase/firestore/lite'
import { firebaseApp } from "../../../common/libraries/firebase"
import SubPageMenuComponent from "../../common/subPageMenu/subPageMenu";
import { ThrsubMenu } from "../../../common/stores/menuList";
import { useRouter } from "next/router";

interface IFormData {
  name: string;
  category: string;
  content: string;
  addressDetail: string;
}

export default function RegistrationComponent(): JSX.Element {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');

  // useRef를 사용하여 마운트 상태 추적
  const isMounted = useRef(true);

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 isMounted 값을 false로 설정
    return () => {
      isMounted.current = false;
    };
  }, []);

  const onClickAddressSearch = (): void => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: Address): void => {

    if (isMounted.current) { // 컴포넌트가 마운트된 경우에만 상태 업데이트
      setAddress(data.address);
      setZipcode(data.zonecode);
      // 약간의 지연을 두어 내부 비동기 작업이 완료될 시간을 줍니다.
      setTimeout(() => {
        if (isMounted.current) {
          setIsOpen(false);
        }
      }, 300);

    }
  };

  const { formState, register, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  // firebase 등록하기 기능
  const onClickSubmit = async (data: IFormData): Promise<void> => {

    try {
      const registrationStore = collection(getFirestore(firebaseApp), "registrationStore")
      await addDoc(registrationStore, {
        content: data.content,
        name: data.name,
        category: data.category,
        storeAddress: {
          zipcode,
          address,
          addressDetail: data.addressDetail
        }
      })
      console.log("등록 완료")
      window.alert("등록이 완료되었습니다!")
      void router.push("/")
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }


  return (
    <>
      {isOpen && (
        <A.AddressModal open={true}  >
          <A.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </A.AddressModal>
      )}
      <div className="Container">
        <SubPageMenuComponent
          subMenuTitle={ThrsubMenu}
          index={1}
          menuTitle={"우리동네가맹점"}
          src={"./images/bg_submenu.png"}
        />

        <A.ContentWrap>
          <A.MainBox>
            <form onSubmit={handleSubmit(onClickSubmit)}>

              <A.GuideBox><A.GuideBoxEm>*</A.GuideBoxEm>표시는 필수입력 항목입니다.</A.GuideBox>

              <A.ContentBox>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>상호</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="text" {...register('name')}></A.ListInput>
                    <A.ErrorBox>{formState.errors.name?.message}</A.ErrorBox>
                  </A.ListBox>

                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>업종</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="text" {...register('category')}></A.ListInput>
                    <A.GuidBoxDiv>* 사업자등록증의 업종을 기입하세요.</A.GuidBoxDiv>
                    <A.ErrorBox>{formState.errors.category?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>신고 내용</A.ListTitle>
                  <A.ListBox>
                    <A.ListTextarea rows={10} {...register('content')}></A.ListTextarea>
                    <A.ErrorBox>{formState.errors.content?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>사업장 소재지</A.ListTitle>
                  <A.ListBox>

                    <A.ListFelxBox>
                      <A.ListInput type="text" readOnly placeholder="07250" value={zipcode ? zipcode : ""}></A.ListInput>
                      <A.ListButton type="button" onClick={onClickAddressSearch}>우편번호검색</A.ListButton>
                    </A.ListFelxBox>
                    <div><A.ListInput type="text" placeholder="주소" readOnly value={address ? address : ""}></A.ListInput></div>

                    <div>
                      <A.ListInput type="text" placeholder="나머지 주소" {...register('addressDetail')}></A.ListInput>
                      <A.ErrorBox>{formState.errors.addressDetail?.message}</A.ErrorBox>
                    </div>


                  </A.ListBox>
                </A.ContentList>

              </A.ContentBox>

              <A.submitButton as="button" type="submit" >등록 하기</A.submitButton>
            </form>
          </A.MainBox>
        </A.ContentWrap>
      </div>
    </>
  )
};