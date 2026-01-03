import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as A from './styles';
import { useAuth } from '../../../../hooks/useAuth';

declare const window: typeof globalThis & {
    Kakao: any;
};

export default function LayoutHeader(): JSX.Element {
    const router = useRouter();
    const { user, login, logout } = useAuth();

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <A.HeaderWrapper>
            <A.HeaderContent>
                <A.PageLogo onClick={() => router.push('/')}>경기 지역 화폐</A.PageLogo>

                <A.MenuBox>
                    <A.MenuItem onClick={() => router.push('/registrationPage')}>차별거래신고</A.MenuItem>
                    <A.MenuItem onClick={() => router.push('/storeSearchPage')}>가맹점 찾기</A.MenuItem>
                </A.MenuBox>

                <A.LoginWrap>
                    {user ? (
                        <div ref={dropdownRef}>
                            <A.UserBox onClick={() => setOpen((prev) => !prev)}>{user.nickname}</A.UserBox>님
                            {open && (
                                <A.LogOutBox>
                                    <A.LogoutButton onClick={logout}>로그아웃</A.LogoutButton>
                                </A.LogOutBox>
                            )}
                        </div>
                    ) : (
                        <A.LoginButton onClick={login}>로그인</A.LoginButton>
                    )}
                </A.LoginWrap>
            </A.HeaderContent>
        </A.HeaderWrapper>
    );
}
