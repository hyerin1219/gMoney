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
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const MenuData = [
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

    // 메뉴 닫기 핸들러
    const closeAll = () => {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
        setOpen(false);
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', closeAll);
        return () => router.events.off('routeChangeComplete', closeAll);
    }, [router.events]);

    return (
        <A.HeaderWrapper>
            <A.HeaderContent>
                <A.FlexBox>
                    <A.HamMenuButton onClick={() => setIsMobileMenuOpen(true)} />
                    <Link href="/">
                        <A.PageLogo>경기 지역 화폐</A.PageLogo>
                    </Link>
                </A.FlexBox>

                {/* PC 메뉴: Hover 시 열리도록 구현 */}
                <A.MenuBox>
                    {MenuData.map((el, idx) => (
                        <li key={el.MainMenu} onMouseEnter={() => el.subMenu && setActiveMenu(idx)} onMouseLeave={() => setActiveMenu(null)} style={{ position: 'relative' }}>
                            <A.MenuItem>{el.link ? <Link href={el.link}>{el.MainMenu}</Link> : <span>{el.MainMenu}</span>}</A.MenuItem>

                            {el.subMenu && activeMenu === idx && (
                                <A.SubMenuBox>
                                    {el.subMenu.map((sub, sIdx) => (
                                        <A.SubMenuItem key={sIdx}>
                                            <Link href={sub.link}>{sub.SubMenu}</Link>
                                        </A.SubMenuItem>
                                    ))}
                                </A.SubMenuBox>
                            )}
                        </li>
                    ))}
                </A.MenuBox>

                {/* 모바일 메뉴 슬라이더 */}
                <A.MobileDrawer isMobileMenuOpen={isMobileMenuOpen} onClick={closeAll}>
                    <A.MobileBox isMobileMenuOpen={isMobileMenuOpen} onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <A.CloseButton onClick={closeAll} />
                        </div>

                        <A.MobileMenuBox>
                            {MenuData.map((el, idx) => (
                                <li key={el.MainMenu} style={{ width: '100%' }}>
                                    {el.subMenu ? (
                                        <>
                                            <A.MobileMenuItem>
                                                <button onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}>{el.MainMenu}</button>
                                            </A.MobileMenuItem>
                                            {activeMenu === idx && (
                                                <A.MobileSubMenuBox>
                                                    {el.subMenu.map((sub) => (
                                                        <A.MobileSubMenuItem key={sub.SubMenu}>
                                                            <Link href={sub.link}>{sub.SubMenu}</Link>
                                                        </A.MobileSubMenuItem>
                                                    ))}
                                                </A.MobileSubMenuBox>
                                            )}
                                        </>
                                    ) : (
                                        <A.MobileMenuItem onClick={() => router.push(el.link!)}>{el.MainMenu}</A.MobileMenuItem>
                                    )}
                                </li>
                            ))}
                        </A.MobileMenuBox>
                    </A.MobileBox>
                </A.MobileDrawer>

                {/* 로그인 영역 */}
                <A.LoginWrap>
                    {user ? (
                        <A.LoginBox ref={dropdownRef}>
                            <A.UserBox onClick={() => setOpen(!open)}>{user.nickname}</A.UserBox>
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
