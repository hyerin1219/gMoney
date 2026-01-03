import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAlert } from '../components/common/alert/AlertProvider';

export const useLoginCheck = () => {
    const router = useRouter();
    const { triggerAlert } = useAlert();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const token = localStorage.getItem('kakaoToken');
        console.log(token);
        if (!token) {
            triggerAlert('로그인 후 이용해 주세요.');

            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    }, [router, triggerAlert]);
};
