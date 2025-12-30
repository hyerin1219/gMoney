import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAlert } from '../components/common/Alert/AlertProvider';

export const useLoginCheck = () => {
    const router = useRouter();
    const { triggerAlert } = useAlert();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const token = localStorage.getItem('kakao_e203d9a5eda596228bf93e7983cf46a3');

        if (!token) {
            triggerAlert('로그인 후 이용해 주세요.');

            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    }, [router, triggerAlert]);
};
