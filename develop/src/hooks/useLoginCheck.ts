import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAlert } from '../components/common/alert/AlertProvider';
import { useAuth } from './useAuth';

export const useLoginCheck = () => {
    const router = useRouter();
    const { triggerAlert } = useAlert();
    const { user, login, logout } = useAuth();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (!user) {
            triggerAlert('로그인 후 이용해 주세요.');

            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    }, [router, triggerAlert]);
};
