import { useState } from 'react';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import type { Address } from 'react-daum-postcode';

import * as A from './styles';
import { schema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { firebaseApp } from '../../../common/libraries/firebase';
import { useAlert } from '../../common/alert/AlertProvider';
import { collection, addDoc, getFirestore } from 'firebase/firestore/lite';
import { useAuth } from '../../../hooks/useAuth';

interface IFormData {
    name: string;
    category: string;
    content: string;
    addressDetail: string;
}

export default function RegistrationComponent(): JSX.Element {
    const router = useRouter();
    const { triggerAlert } = useAlert();
    const [isOpen, setIsOpen] = useState(false);
    const [storeAddress, setStoreAddress] = useState({
        zipcode: '',
        address: '',
    });
    const { user } = useAuth();

    const onCompleteAddressSearch = (data: Address) => {
        setStoreAddress({
            zipcode: data.zonecode,
            address: data.address,
        });
        setIsOpen(false);
    };

    const { formState, register, handleSubmit } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // firebase 등록하기 기능
    const onClickSubmit = async (data: IFormData): Promise<void> => {
        try {
            const registrationStore = collection(getFirestore(firebaseApp), 'registrationStore');
            await addDoc(registrationStore, {
                id: user,
                content: data.content,
                name: data.name,
                category: data.category,
                storeAddress: {
                    ...storeAddress,
                    addressDetail: data.addressDetail,
                },
            });
            triggerAlert('등록이 완료되었습니다.');

            setTimeout(() => {
                void router.push('/');
            }, 2500); // alert 시간과 맞추기
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <section className="Wrap">
            {/* 우편번호 모달 */}
            {isOpen && (
                <A.AddressModal>
                    <A.AddressSearchInput onComplete={onCompleteAddressSearch} />
                </A.AddressModal>
            )}

            {/* form  */}
            <A.MainBox>
                <form onSubmit={handleSubmit(onClickSubmit)}>
                    <A.GuideBox>
                        <A.GuideBoxEm>*</A.GuideBoxEm>표시는 필수입력 항목입니다.
                    </A.GuideBox>

                    <A.ContentBox>
                        <A.ContentList>
                            <A.ListTitle>
                                <A.GuideBoxEm>*</A.GuideBoxEm>상호
                            </A.ListTitle>
                            <A.ListBox>
                                <A.ListInput type="text" {...register('name')}></A.ListInput>
                                <A.ErrorBox>{formState.errors.name?.message}</A.ErrorBox>
                            </A.ListBox>
                        </A.ContentList>

                        <A.ContentList>
                            <A.ListTitle>
                                <A.GuideBoxEm>*</A.GuideBoxEm>업종
                            </A.ListTitle>
                            <A.ListBox>
                                <A.ListInput type="text" {...register('category')}></A.ListInput>

                                <A.ErrorBox>{formState.errors.category?.message}</A.ErrorBox>
                            </A.ListBox>
                        </A.ContentList>

                        <A.ContentList>
                            <A.ListTitle>
                                <A.GuideBoxEm>*</A.GuideBoxEm>신고 내용
                            </A.ListTitle>
                            <A.ListBox>
                                <A.ListTextarea rows={10} {...register('content')}></A.ListTextarea>
                                <A.ErrorBox>{formState.errors.content?.message}</A.ErrorBox>
                            </A.ListBox>
                        </A.ContentList>

                        <A.ContentList>
                            <A.ListTitle>
                                <A.GuideBoxEm>*</A.GuideBoxEm>사업장 소재지
                            </A.ListTitle>
                            <A.ListBox>
                                <A.ListFelxBox>
                                    <A.ListInput type="text" readOnly placeholder="07250" value={storeAddress.zipcode ? storeAddress.zipcode : ''}></A.ListInput>
                                    <A.ListButton type="button" onClick={() => setIsOpen(true)}>
                                        우편번호검색
                                    </A.ListButton>
                                </A.ListFelxBox>
                                <A.MarginBox>
                                    <A.ListInput type="text" placeholder="주소" readOnly value={storeAddress.address ? storeAddress.address : ''}></A.ListInput>
                                </A.MarginBox>

                                <A.MarginBox>
                                    <A.ListInput type="text" placeholder="나머지 주소" {...register('addressDetail')}></A.ListInput>
                                    <A.ErrorBox>{formState.errors.addressDetail?.message}</A.ErrorBox>
                                </A.MarginBox>
                            </A.ListBox>
                        </A.ContentList>
                    </A.ContentBox>

                    <A.submitButton as="button" type="submit">
                        등록 하기
                    </A.submitButton>
                </form>
            </A.MainBox>
        </section>
    );
}
