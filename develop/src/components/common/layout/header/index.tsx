import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
    // 메뉴
    const [active, setActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const Menu = [
        {
            MainMenu: '차별거래신고',
            subMenu: [
                { SubMenu: '차별거래 신고하기', link: '/registrationPage' },
                { SubMenu: '차별거래 신고 내역', link: '/registrationListPage' },
            ],
        },
        { MainMenu: '가맹점 찾기', link: '/storeSearchPage' },
        { MainMenu: '마이 페이지', link: '/myPage' },
    ];

    useEffect(() => {
        // 페이지 이동이 완료되면 모든 메뉴 상태를 초기화
        const handleRouteChange = () => {
            setIsMobileMenuOpen(false);
            setActive(false);
            setOpen(false);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => router.events.off('routeChangeComplete', handleRouteChange);
    }, [router.events]);

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
                    <Link href={`/`}>
                        <A.PageLogo>경기 지역 화폐</A.PageLogo>
                    </Link>
                </A.FlexBox>

                {/* pc 메뉴 */}
                <A.MenuBox>
                    {Menu.map((el) => (
                        <li key={el.MainMenu}>
                            {el.subMenu ? (
                                <A.SubMenuContent>
                                    <A.MenuItem>
                                        <button onClick={() => setActive((prev) => !prev)}>{el.MainMenu}</button>
                                    </A.MenuItem>
                                    {active && (
                                        <A.SubMenuBox>
                                            {el.subMenu.map((el, idx) => (
                                                <A.SubMenuItem key={idx}>
                                                    <Link href={`${el.link}`}>{el.SubMenu}</Link>
                                                </A.SubMenuItem>
                                            ))}
                                        </A.SubMenuBox>
                                    )}
                                </A.SubMenuContent>
                            ) : (
                                <A.MenuItem>
                                    <Link href={`${el.link}`}>{el.MainMenu}</Link>
                                </A.MenuItem>
                            )}
                        </li>
                    ))}
                </A.MenuBox>

                {/* 모바일 메뉴 */}
                <A.MobileDrawer onClick={() => setIsMobileMenuOpen(false)} isMobileMenuOpen={isMobileMenuOpen}>
                    <A.MobileBox onClick={(e) => e.stopPropagation()} isMobileMenuOpen={isMobileMenuOpen}>
                        <A.CloseButton onClick={() => setIsMobileMenuOpen(false)} />

                        <A.MobileMenuBox>
                            {Menu.map((el) => (
                                <li style={{ width: '100%' }} key={el.MainMenu}>
                                    {el.subMenu ? (
                                        <div>
                                            <A.MobileMenuItem>
                                                <button onClick={() => setActive((prev) => !prev)}>{el.MainMenu}</button>
                                            </A.MobileMenuItem>

                                            <ul>
                                                {active &&
                                                    el.subMenu.map((sub) => (
                                                        <li
                                                            key={sub.SubMenu}
                                                            onClick={() => {
                                                                setIsMobileMenuOpen(false);
                                                                setActive(false);
                                                            }}
                                                        >
                                                            <Link key={sub.SubMenu} href={`/${sub.link}`}>
                                                                {sub.SubMenu}
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <A.MobileMenuItem
                                            onClick={() => {
                                                router.push(el.link!);
                                                setIsMobileMenuOpen(false);
                                                setActive(false);
                                            }}
                                        >
                                            {el.MainMenu}
                                        </A.MobileMenuItem>
                                    )}
                                </li>
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
                                    <Link href={`/myPage`}>마이 페이지</Link>
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
