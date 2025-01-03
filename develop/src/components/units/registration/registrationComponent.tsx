import { useState } from "react";
import * as A from "./registration.styles"
import type { Address } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./registration.validation";
import { collection, addDoc, getFirestore } from 'firebase/firestore/lite'
import {firebaseApp} from "../../../common/libraries/firebase"

interface IFormData {
    id: string;
    number: number;
    name: string;
    representative: string;
    category: string;
    addressDetail: string;
}

export default function RegistrationComponent(): JSX.Element {

  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');


  const onClickAddressSearch = (): void => {
        setIsOpen((prev) => !prev);
    };

  const onCompleteAddressSearch = (data: Address): void => {
      setAddress(data.address);
      setZipcode(data.zonecode);
      setIsOpen((prev) => !prev);
  };

  const { formState, register, handleSubmit } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // firebase 등록하기 기능
  const onClickSubmit = async (data:IFormData):Promise<void> => {
    
    const registrationStore = collection(getFirestore(firebaseApp), "registrationStore")
    await addDoc(registrationStore, {
            id: data.id,
            number: data.number,
            name: data.name,
            representative: data.representative,
            category: data.category,
            storeAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            }
        })
  }


  return (
    <>
    {isOpen && (
        <A.AddressModal open={true}  >
            <A.AddressSearchInput onComplete={onCompleteAddressSearch}  />
        </A.AddressModal>
    )}
      <div className="Container">
        <A.ContentWrap>
          <A.MainBox>
            <form onSubmit={handleSubmit(onClickSubmit)}>
              <A.GuideBox><A.GuideBoxEm>*</A.GuideBoxEm>표시는 필수입력 항목입니다.</A.GuideBox>

              <A.ContentBox>
                <A.ContentList>
                  <A.ListTitle>
                    <A.GuideBoxEm>*</A.GuideBoxEm>지역화폐
                  </A.ListTitle>

                  <A.ListBox>
                    
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle>발행종류</A.ListTitle>

                  <A.ListBox></A.ListBox>
                </A.ContentList>
              </A.ContentBox>

              <A.GuideBox><A.GuideBoxEm>*</A.GuideBoxEm>표시는 필수입력 항목입니다.</A.GuideBox>

              <A.ContentBox>
                <A.ContentList>
                  <A.ListTitle>아이디</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="text" {...register('id')}></A.ListInput>
                    <A.ErrorBox>{formState.errors.id?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>사업자등록번호</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="number" {...register('number')}></A.ListInput>
                    <A.ListButton type="button" >조회하기</A.ListButton>
                    <A.ErrorBox>{formState.errors.number?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>상호</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="text" {...register('name')}></A.ListInput>
                    <A.ErrorBox>{formState.errors.name?.message}</A.ErrorBox>
                  </A.ListBox>
                  
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>대표자</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="text" {...register('representative')}></A.ListInput> <A.GuideBoxEm>* 대표자 명의로 된 아이디로 신청 해주시기 바랍니다.</A.GuideBoxEm>
                    <A.ErrorBox>{formState.errors.representative?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>업종</A.ListTitle>
                  <A.ListBox>
                    <A.ListInput type="text" {...register('category')}></A.ListInput> <A.GuideBoxEm>* 사업자등록증의 업종을 기입하세요.</A.GuideBoxEm>
                    <A.ErrorBox>{formState.errors.category?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

                <A.ContentList>
                  <A.ListTitle><A.GuideBoxEm>*</A.GuideBoxEm>사업장 소재지</A.ListTitle>
                  <A.ListBox>
                    <div>
                      <A.ListInput type="text" readOnly placeholder="07250" value={zipcode? zipcode : ""}></A.ListInput>
                      <A.ListButton type="button" onClick={onClickAddressSearch}>우편번호검색</A.ListButton>
                    </div>
                    <A.ListInput type="text" placeholder="주소" value={address? address : ""} {...register('addressDetail')}></A.ListInput>
                    <A.ErrorBox>{formState.errors.addressDetail?.message}</A.ErrorBox>
                  </A.ListBox>
                </A.ContentList>

              </A.ContentBox>

              <A.submitButton >등록 하기</A.submitButton>
            </form>
          </A.MainBox>
        </A.ContentWrap>
      </div>
    </>
  )
};77