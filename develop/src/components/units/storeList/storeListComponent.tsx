import  { ChangeEvent, useEffect, useState } from "react";
import { ThrsubMenu } from "../../../common/stores/menuList";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SubPageMenuComponent from "../../common/subPageMenu/subPageMenu";

import * as A from "./storeList.styles";
import { REGION_LIST } from "../../../common/stores/region";

import { IBusinessInfo } from "../../../common/stores/types";
import type { SelectChangeEvent } from "@mui/material/Select";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function StoreListComponent(): JSX.Element {
  const [region, setRegion] = useState("");
  const [info, setInfo] = useState<IBusinessInfo[]>([]); // data를 배열로 설정

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const  [textValue, setTextValue] = useState("")

  const onChangeTextValue = (event:ChangeEvent<HTMLInputElement>):void =>{
    setTextValue(event.target.value)
  }

  useEffect(() => {
  
    // Kakao 지도 API 스크립트 로드
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = async () => {
      // 기본 지도 초기화 (지역 미선택 시)
      if (!region) {
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");

          if (!mapContainer) {
            console.error("❌ `#map` 요소를 찾을 수 없습니다!");
            return;
          }

          const mapOption = {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
          };
          new window.kakao.maps.Map(mapContainer, mapOption);

          
        });
        return;
      }

      try {
        // 경기도 Open API에서 데이터 받아오기
        const response = await fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&SIGUN_NM=${region}`);
        const result = await response.json();
        // console.log("result: ", result);

        // Open API 응답에서 필요한 데이터 추출
        const info = result.RegionMnyFacltStus[1].row
        .filter((store: any) => store.SIGUN_NM === region && store.LEAD_TAX_MAN_STATE_CD !== "03"  ) // 폐업한 store제외
        
        // 받아온 데이터를 state에 설정
        setInfo(info);

        // region에 따른 지도 업데이트
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          // console.log("container: ", container);
          const map = new window.kakao.maps.Map(container, {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
          });

          const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
          const bounds = new window.kakao.maps.LatLngBounds();

          info.forEach((store: any) => {
            const { REFINE_WGS84_LAT, REFINE_WGS84_LOGT } = store; // 위도, 경도 데이터

            const imageSrc = "images/ico_marker.png"; // 마커이미지의 주소입니다
            const imageSize = new window.kakao.maps.Size(35, 45); // 마커이미지의 크기입니다
            const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다

            const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);


            const marker = new window.kakao.maps.Marker({
              image: markerImage,
              map,
              position: new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT)
            });

            // 마커 클릭 이벤트
            window.kakao.maps.event.addListener(marker, "click", () => {
              infowindow.setContent(`
                                <div style="padding:5px;font-size:12px; width: max-content;">
                                    <p>${store.CMPNM_NM}</p>
                                    <p>${store.REFINE_LOTNO_ADDR}</p>
                                </div>
                            `);
              infowindow.open(map, marker);
            });

            if (!REFINE_WGS84_LAT || !REFINE_WGS84_LOGT) {
                  console.warn(`❌ ${store.CMPNM_NM} (좌표 없음)`) 
                return;
              }// 위도, 경도 없는 데이터 제외

            bounds.extend(new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT));
          });

          map.setBounds(bounds); // 검색 결과에 맞게 지도 범위 조정

        });

        

      } catch (error) {
        console.error("❌ 데이터 불러오기 실패:", error);
      }
    };

    
  }, [region,textValue]);

  

  return (
    <div className="Container">
      <SubPageMenuComponent subMenuTitle={ThrsubMenu} index={0} menuTitle={"우리동네가맹점"} src={"./images/bg_submenu02.png"} />

      <A.contentWrap>
        <A.SearchWrap>
          <A.FormControlBox>
            <InputLabel id="demo-simple-select-label">지역</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={region} label="region" onChange={handleChange}>
              {REGION_LIST.map((el) => (
                <MenuItem key={el.name} value={el.name}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </A.FormControlBox>
          <A.SearchInput onChange={onChangeTextValue}  type="text" placeholder="검색어를 입력하세요." />
          <A.SearchButton  />
        </A.SearchWrap>

        <A.SearchWrap>
          <A.ListWrap>
            <A.scrollBox>
              {region ? (
                info.map((el) => (
                  <A.StoreList key={el.BIZREGNO}>
                    <A.StoreName>{el.CMPNM_NM}</A.StoreName>
                    <A.StoreEtc>{el.INDUTYPE_NM}</A.StoreEtc>
                    <A.StoreEtc>{el.REFINE_ROADNM_ADDR}</A.StoreEtc>
                  </A.StoreList>
                ))
              ) : (
                <div>지역을 선택하세요.</div>
              )}
            </A.scrollBox>
          </A.ListWrap>
          <A.MapBox id="map"></A.MapBox> {/* 지도 영역 */}
        </A.SearchWrap>
      </A.contentWrap>
    </div>
  );
}
