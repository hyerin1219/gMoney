import { useEffect, useState } from 'react';
import { AuthContext, IUser } from './authContext';

declare const window: typeof globalThis & {
    Kakao: any;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        if (!key) return;

        const script = document.createElement('script');
        script.src = `https://developers.kakao.com/sdk/js/kakao.js`;
        script.async = true;

        script.onload = () => {
            if (window.Kakao && !window.Kakao.isInitialized()) {
                window.Kakao.init(key);
                setIsReady(true);
            }
        };

        document.head.appendChild(script);
    }, []);

    const login = () => {
        if (!isReady) return;

        window.Kakao.Auth.login({
            success: async (auth: any) => {
                const res = await fetch('https://kapi.kakao.com/v1/oidc/userinfo', {
                    headers: { Authorization: `Bearer ${auth.access_token}` },
                });

                const data = await res.json();
                setUser({ nickname: data.nickname, sub: data.sub });
            },
        });
    };

    const logout = () => {
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
