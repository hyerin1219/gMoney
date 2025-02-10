import  { ChangeEvent, useEffect, useReducer, useRef, useState } from "react";
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

// 상태의 타입 정의
interface State {
  region: string;
  textValue: string;  // 입력 필드 값
  searchTerm: string; // 실제 필터링에 사용될 검색어
  info: IBusinessInfo[];
}

// 액션 타입 정의
type Action =
  | { type: "SET_REGION"; payload: string }
  | { type: "SET_TEXT_VALUE"; payload: string }
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_INFO"; payload: IBusinessInfo[] };

// 초기 상태
const initialState: State = {
  region: "",
  textValue: "",
  searchTerm: "",
  info: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_REGION":
      // 지역 변경 시 검색어 관련 값도 초기화
      return { ...state, region: action.payload, textValue: "", searchTerm: "" };
    case "SET_TEXT_VALUE":
      return { ...state, textValue: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_INFO":
      return { ...state, info: action.payload };
    default:
      return state;
  }
}

export default function StoreListComponent(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  // mapRef: 카카오맵 인스턴스를 저장
  const mapRef = useRef<any>(null);
  // markersRef: 현재 지도에 찍혀있는 마커들을 저장
  const markersRef = useRef<any[]>([]);

  // 지역 선택 이벤트 핸들러
  const handleRegionChange = (event: SelectChangeEvent) => {
    dispatch({ type: "SET_REGION", payload: event.target.value });
  };

  // 입력 필드 변경 이벤트 핸들러
  const onChangeTextValue = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "SET_TEXT_VALUE", payload: event.target.value });
  };

  // 검색 버튼 클릭 시, 검색어를 확정
  const handleSearchClick = () => {
    dispatch({ type: "SET_SEARCH_TERM", payload: state.textValue });
  };
  useEffect(() => {
    // 카카오 지도 API 스크립트 로드 (이미 로드되어 있다면 중복 로드되지 않도록 처리 필요)
    const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = async () => {
      if (!state.region) {
        // 지역 미선택 시 기본 지도 초기화
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          if (!mapContainer) {
            console.error("❌ `#map` 요소를 찾을 수 없습니다!");
            return;
          }
          mapRef.current = new window.kakao.maps.Map(mapContainer, {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 4,
          });
        });
        return;
      }

      try {
        const response = await fetch(
          `https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&SIGUN_NM=${state.region}`
        );
        const result = await response.json();
        // 폐업한 가맹점 제외 처리
        const infoData = result.RegionMnyFacltStus[1].row.filter(
          (store: IBusinessInfo) =>
            store.SIGUN_NM === state.region && store.LEAD_TAX_MAN_STATE_CD !== "03"
        );
        dispatch({ type: "SET_INFO", payload: infoData });

        // 카카오 지도 초기화 및 마커 표시
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          mapRef.current = new window.kakao.maps.Map(container, {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
          });
          // 초기 데이터로 마커 표시 (검색어가 없으므로 infoData 전체)
          updateMarkers(infoData);
        });
      } catch (error) {
        console.error("❌ 데이터 불러오기 실패:", error);
      }
    };

    // cleanup: 스크립트 중복 등록 방지를 위해 필요 시 처리
    return () => {
      document.head.removeChild(script);
    };
  }, [state.region]);

  // searchTerm이나 info가 변경될 때마다 지도 마커 업데이트 (검색 버튼 클릭 시 searchTerm이 업데이트됨)
  useEffect(() => {
    if (!mapRef.current) return;
    // searchTerm이 있으면 info에서 필터링, 없으면 전체 표시
    const filteredData = state.searchTerm
      ? state.info.filter((store) => store.CMPNM_NM.includes(state.searchTerm))
      : state.info;
    updateMarkers(filteredData);
  }, [state.info, state.searchTerm]);

  // 마커 업데이트 함수: 기존 마커 제거 후, 전달받은 데이터로 새 마커 생성
  const updateMarkers = (data: IBusinessInfo[]) => {

    // 기존 마커 제거
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // 지도 범위를 설정하기 위한 bounds 객체
    const bounds = new window.kakao.maps.LatLngBounds();

    data.forEach((store: any) => {
      const { REFINE_WGS84_LAT, REFINE_WGS84_LOGT } = store;
      if (!REFINE_WGS84_LAT || !REFINE_WGS84_LOGT) {
        // console.warn(`❌ ${store.CMPNM_NM} (좌표 없음)`);
        return;
      }

      // 마커 이미지 설정 (필요에 따라 수정)
      const imageSrc = "images/ico_marker.png";
      const imageSize = new window.kakao.maps.Size(35, 45);
      const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        image: markerImage,
        map: mapRef.current,
        position: new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT),
      });

      // 마커 클릭 시 인포윈도우 표시
      const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
      window.kakao.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(`
          <div style="padding:5px;font-size:12px; width: max-content;">
            <p>${store.CMPNM_NM}</p>
            <p>${store.REFINE_LOTNO_ADDR}</p>
          </div>
        `);
        infowindow.open(mapRef.current, marker);
      });

      // 마커 저장
      markersRef.current.push(marker);
      // bounds 확장
      bounds.extend(new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT));
    });
    // 설정된 bounds로 지도 영역 조정
    mapRef.current.setBounds(bounds);
  };

  return (
    <div className="Container">
      <SubPageMenuComponent subMenuTitle={ThrsubMenu} index={0} menuTitle={"우리동네가맹점"} src={"./images/bg_submenu02.png"} />

      <A.contentWrap>
        <A.SearchWrap>
          <A.FormControlBox>
            <InputLabel id="demo-simple-select-label">지역</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={state.region} label="지역" onChange={handleRegionChange}>
              {REGION_LIST.map((el) => (
                <MenuItem key={el.name} value={el.name}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </A.FormControlBox>
          <A.SearchInput  value={state.textValue} onChange={onChangeTextValue}  type="text" placeholder="검색어를 입력하세요." />
          <A.SearchButton onClick={handleSearchClick} />
        </A.SearchWrap>

        <A.SearchWrap>
          <A.ListWrap>

            {/* 가맹점 리스트 (검색어에 따른 필터링 결과 표시) */}
            <A.scrollBox>
            {state.region ? (
              (state.searchTerm
                  ? state.info.filter((store) =>
                      store.CMPNM_NM.includes(state.searchTerm)
                    )
                  : state.info
                ).map((el) => (
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

