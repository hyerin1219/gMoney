import { AlertProvider } from '../src/components/common/alert/AlertProvider';
import { AuthProvider } from '../src/components/common/auth/AuthProvider';
import LayoutFooter from '../src/components/common/layout/footer';
import LayoutHeader from '../src/components/common/layout/header';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="mainWrap">
            <AuthProvider>
                <LayoutHeader />
                <main>
                    <AlertProvider>
                        <Component {...pageProps} />
                    </AlertProvider>
                </main>
                <LayoutFooter />
            </AuthProvider>
        </div>
    );
}
