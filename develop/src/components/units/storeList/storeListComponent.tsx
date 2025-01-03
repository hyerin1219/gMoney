import * as A from "./storeList.styles";
import SearchComponent from "../../common/search/searchComponent";
import { useEffect } from "react";

declare const window: typeof globalThis & {
    kakao: any;
    IMP: any;
};

export default function StoreListComponent():JSX.Element{

  const userAddress = "d"

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=b2f7deca5ab3989231a32111ffa2246b&autoload=false&libraries=services';
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
                const map = new window.kakao.maps.Map(container, {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 기본 위치 (수정 필요)
                    level: 3, // 지도의 확대 레벨
                });

                const geocoder = new window.kakao.maps.services.Geocoder();

                geocoder.addressSearch(userAddress, function (result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        const marker = new window.kakao.maps.Marker({
                            map: map,
                            position: coords,
                        });

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        const infowindow = new window.kakao.maps.InfoWindow({
                            content: `<div style="padding:5px;">${userAddress}</div>`,
                        });
                        infowindow.open(map, marker);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        map.setCenter(coords);
                    }
                });
            });
        };
    }, [userAddress]); // userAddress가 변경될 때마다 다시 실행됩니다.

  return (

    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <div className="container">
        <A.contentWrap>
            <SearchComponent></SearchComponent>
            <div id="map">

            </div>
        </A.contentWrap>
      </div>
    </>
  )
};