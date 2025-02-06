import ComponentWrap from "../src/components/common/componentWrap";
import LayoutFooter from "../src/components/common/layout/footer/LayoutFooter";
import LayoutHeader from "../src/components/common/layout/header/LayoutHeader";

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <div className="mainWrap">
        <LayoutHeader />
        <main>
          <Component {...pageProps} />
        </main>
        <LayoutFooter />
      </div>
    </>
  );
}
