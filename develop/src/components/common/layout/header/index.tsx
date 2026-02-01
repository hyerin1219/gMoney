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

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const Menu = [
        { menu: '차별거래신고', link: '/registrationPage' },
        { menu: '가맹점 찾기', link: '/storeSearchPage' },
        { menu: '마이 페이지', link: '/myPage' },
    ];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
                setIsMobileMenuOpen(false);
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
                <A.FlexBox>
                    <A.HamMenuButton onClick={() => setIsMobileMenuOpen(true)}></A.HamMenuButton>
                    <A.PageLogo onClick={() => router.push('/')}>경기 지역 화폐</A.PageLogo>
                </A.FlexBox>

                {/* pc 메뉴 */}
                <A.MenuBox>
                    {Menu.map((el) => (
                        <A.MenuItem key={el.menu} onClick={() => router.push(el.link)}>
                            {el.menu}
                        </A.MenuItem>
                    ))}
                </A.MenuBox>

                {/* 모바일 메뉴 */}
                <A.MobileDrawer onClick={() => setIsMobileMenuOpen(false)} isMobileMenuOpen={isMobileMenuOpen}>
                    <A.MobileBox onClick={(e) => e.stopPropagation()} isMobileMenuOpen={isMobileMenuOpen}>
                        <A.CloseButton onClick={() => setIsMobileMenuOpen(false)}></A.CloseButton>

                        <A.MobileMenuBox>
                            {Menu.map((el) => (
                                <A.MobileMenuItem
                                    key={el.menu}
                                    onClick={() => {
                                        router.push(el.link);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {el.menu}
                                </A.MobileMenuItem>
                            ))}
                        </A.MobileMenuBox>
                    </A.MobileBox>
                </A.MobileDrawer>

                {/* 로그인 */}
                <A.LoginWrap>
                    {user ? (
                        <A.LoginBox ref={dropdownRef}>
                            <A.UserBox onClick={() => setOpen((prev) => !prev)}>{user.nickname}</A.UserBox> 님
                            {open && (
                                <A.LogOutBox>
                                    <A.LogoutButton onClick={() => router.push('/myPage')}>마이 페이지</A.LogoutButton>
                                    <A.LogoutButton onClick={logout}>로그아웃</A.LogoutButton>
                                </A.LogOutBox>
                            )}
                        </A.LoginBox>
                    ) : (
                        <A.LoginButton onClick={login}>로그인</A.LoginButton>
                    )}
                </A.LoginWrap>
            </A.HeaderContent>
        </A.HeaderWrapper>
    );
}
