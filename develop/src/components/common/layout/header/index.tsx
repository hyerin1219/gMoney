import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as A from './styles';
import { useAuth } from '../../../../hooks/useAuth';

declare const window: typeof globalThis & {
    Kakao: any;
};

export default function LayoutHeader(): JSX.Element {
    const router = useRouter();
    const { user, login, logout } = useAuth();

    // const [isKakaoReady, setIsKakaoReady] = useState(false);
    // const [userData, setUserData] = useState<any>(null);
    // const router = useRouter();

    // const onClickMenu = (link: string): void => {
    //     void router.push(`/${link}`);
    // };

    // useEffect(() => {
    //     const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    //     const script = document.createElement('script');
    //     script.src = `https://developers.kakao.com/sdk/js/kakao.js`;
    //     script.async = true;
    //     script.onload = () => {
    //         if (window.Kakao) {
    //             if (!window.Kakao.isInitialized()) {
    //                 window.Kakao.init(KAKAO_API_KEY);
    //                 setIsKakaoReady(true);
    //                 console.log('카카오 SDK 초기화 완료:', window.Kakao.isInitialized());
    //             }
    //         }
    //     };
    //     document.head.appendChild(script);
    // }, []);

    // const handleLogin = () => {
    //     if (isKakaoReady) {
    //         window.Kakao.Auth.login({
    //             success: function (authObj: any) {
    //                 console.log('카카오 로그인 성공!', authObj);
    //                 getUserInfo(authObj.access_token); // 로그인 성공 후 사용자 정보 가져오기

    //                 router.push('/');
    //             },
    //             fail: function (err: any) {
    //                 console.error('카카오 로그인 실패!', err);
    //             },
    //         });
    //     } else {
    //         console.log('카카오 SDK가 준비되지 않았습니다.');
    //     }
    // };

    // const getUserInfo = async (accessToken: string) => {
    //     const url = 'https://kapi.kakao.com/v1/oidc/userinfo';

    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error('API 호출에 실패했습니다.');
    //         }

    //         const data = await response.json();
    //         // console.log('사용자 정보:', data);

    //         setUserData(data);
    //     } catch (error) {
    //         console.error('에러 발생:', error);
    //     }
    // };

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
                        <A.UserWrap>
                            <div>
                                <A.UserBox>{user.nickname} </A.UserBox>님
                            </div>
                            <A.LoginButton onClick={logout}>로그아웃</A.LoginButton>
                        </A.UserWrap>
                    ) : (
                        <A.LoginButton onClick={login}>로그인</A.LoginButton>
                    )}
                </A.LoginWrap>
            </A.HeaderContent>
        </A.HeaderWrapper>
    );
}
