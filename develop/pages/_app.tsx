import ComponentWrap from "../src/components/common/componentWrap/componentWrap";
import LayoutFooter from "../src/components/common/layout/footer/LayoutFooter";
import LayoutHeader from "../src/components/common/layout/header/LayoutHeader";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const saveToCache = async (qqqData:any, url:any, responseData:any) => {

  const cache = await caches.open(qqqData);
  const response = new Response(JSON.stringify(responseData));
  await cache.put( "https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json", response);
  };



  return (
    <>
      <div className="mainWrap">
        <LayoutHeader />
        <ComponentWrap>
          <Component {...pageProps} />
        </ComponentWrap>
        <LayoutFooter />
      </div>
    </>
  );
}
