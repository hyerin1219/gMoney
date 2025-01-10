import * as A from "./storeList.styles";
import SearchComponent from "../../common/search/searchComponent";
import React, { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function StoreListComponent(): JSX.Element {
  useEffect(() => {
    // Kakao 지도 API 스크립트 로드
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    console.log("KAKAO_API_KEY", KAKAO_API_KEY);

    // 로컬 스토리지에서 데이터를 가져옵니다.
    const cachedData = localStorage.getItem("BusinessInfoData");

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);

      // 데이터를 기반으로 사용자 주소를 추출
      const userAddress =
        parsedData?.RegionMnyFacltStus?.[1]?.row?.[0]?.REFINE_LOTNO_ADDR;

      console.log(userAddress);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
          const map = new window.kakao.maps.Map(container, {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 기본 위치 (수정 필요)
            level: 3, // 지도의 확대 레벨
          });

          const geocoder = new window.kakao.maps.services.Geocoder();

          geocoder.addressSearch(
            userAddress,
            function (result: any, status: any) {
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );

                console.log("coords", coords);

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
            }
          );
        });
      };
    } else {
      console.error("로컬 스토리지에 데이터가 없습니다.");
    }
  }, []); // 컴포넌트가 마운트 될 때만 실행

  return (
    <>
      <div className="container">
        <A.contentWrap>
          <SearchComponent />
          <A.MapBox id="map"></A.MapBox> {/* 지도 영역 크기 설정 */}
        </A.contentWrap>
      </div>
    </>
  );
}
