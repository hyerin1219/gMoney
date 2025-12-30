import { AlertProvider } from '../src/components/common/Alert/AlertProvider';
import LayoutFooter from '../src/components/common/layout/footer';
import LayoutHeader from '../src/components/common/layout/header';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="mainWrap">
            <LayoutHeader />
            <main>
                <AlertProvider>
                    <Component {...pageProps} />
                </AlertProvider>
            </main>
            <LayoutFooter />
        </div>
    );
}
