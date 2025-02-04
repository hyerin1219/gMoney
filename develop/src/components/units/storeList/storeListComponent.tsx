import * as A from './storeList.styles';
import React, { ChangeEvent, useEffect, useState } from 'react';
import SubPageMenuComponent from '../../common/subPageMenu/subPageMenu';
import { ThrsubMenu } from '../../../common/stores/menuList';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { regionList } from '../../../common/stores/region';
import { getFromApi } from '../../../common/stores/cacheUtils';

declare const window: typeof globalThis & {
    kakao: any;
};


export default function StoreListComponent(): JSX.Element {
    const [region, setRegion] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
    };

    useEffect(() => {
        // Kakao 지도 API 스크립트 로드
        const KAKAO_API_KEY = "693205c2fd329bf6a8bff9b5fc134991";
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(script);

        script.onload = () => {
            // 기본 지도 초기화 (지역 미선택 시)
            if (!region) {
                window.kakao.maps.load(() => {
                    const mapContainer = document.getElementById('map');
                    const mapOption = {
                        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
                        level: 3,
                    };
                    new window.kakao.maps.Map(mapContainer, mapOption);
                });
                return;
            }

            // 지역 검색 및 지도 업데이트
            const performSearch = async () => {
                const container = document.getElementById('map');
                const map = new window.kakao.maps.Map(container, {
                    center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
                    level: 3,
                });

                const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

                // API 요청
                const result = await getFromApi(`https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&SIGUN_NM=${region}`);
                
                const filteredData = result.RegionMnyFacltStus[1].row.filter((store: any) =>
                    store.SIGUN_NM === region && store.LEAD_TAX_MAN_STATE_CD !== "03" // region지역 필터링 && 폐업한 가게 제외
                );

                if (filteredData.length === 0) {
                    console.error('❌ 검색된 가맹점이 없습니다.');
                    return;
                }
                
                const bounds = new window.kakao.maps.LatLngBounds();

                // 조건에 맞는 데이터만 필터링
                filteredData.forEach((store: any) => {
                    const { REFINE_WGS84_LAT, REFINE_WGS84_LOGT } = store; // 위도, 경도 데이터
                        
                        const imageSrc = 'images/ico_marker.png'; // 마커이미지의 주소입니다    
                        const imageSize = new window.kakao.maps.Size(35, 45); // 마커이미지의 크기입니다
                        const imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                            
                        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                        const marker = new window.kakao.maps.Marker({
                            image: markerImage,
                            map,
                            position: new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT),
                        });

                        // 마커 클릭 이벤트
                        window.kakao.maps.event.addListener(marker, 'click', () => {
                            infowindow.setContent(
                                `<div class=""  style="padding:5px;font-size:12px; width: max-content;">
                                    <p>${store.CMPNM_NM}</p>
                                    <p>${store.REFINE_LOTNO_ADDR}</p>
                                </div>`
                            );
                            infowindow.open(map, marker);
                        });

                        bounds.extend(new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT));
                });

                map.setBounds(bounds); // 검색 결과에 맞게 지도 범위 조정
            };

            performSearch();
        };
    }, [region]);

    // 검색창 지도 업데이트



    return (
        <div className="Container">
            <SubPageMenuComponent
                subMenuTitle={ThrsubMenu}
                index={0}
                menuTitle={"우리동네가맹점"}
                src={"./images/bg_submenu02.png"}
            />

            <A.contentWrap>
                <A.SearchWrap>
                    <A.FormControlBox>
                        <InputLabel id="demo-simple-select-label">지역</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={region}
                            label="region"
                            onChange={handleChange}
                        >
                            {regionList.map((el) => (
                                <MenuItem key={el.name} value={el.name}>
                                    {el.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </A.FormControlBox>
                    <A.SearchInput  type="text" placeholder="검색어를 입력하세요." />
                    <A.SearchButton />
                </A.SearchWrap>

                <A.SearchWrap>
                    <A.ListWrap>
                        <A.scrollBox></A.scrollBox>
                    </A.ListWrap>
                    <A.MapBox id="map"></A.MapBox> {/* 지도 영역 */}
                </A.SearchWrap>
            </A.contentWrap>
        </div>
    );
}
