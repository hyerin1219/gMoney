import * as A from './storeList.styles';
import React, { useEffect, useState } from 'react';
import SubPageMenuComponent from '../../common/subPageMenu/subPageMenu';
import { ThrsubMenu } from '../../../common/stores/menuList';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { regionList } from '../../../common/stores/region';

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
        // const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        const KAKAO_API_KEY = "693205c2fd329bf6a8bff9b5fc134991"
        
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(script);

        // 로컬 스토리지에서 데이터를 가져옵니다.
        const cachedData = localStorage.getItem('BusinessInfoData');
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
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
            const performSearch = () => {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const map = new window.kakao.maps.Map(container, {
                        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
                        level: 3,
                    });

                    const ps = new window.kakao.maps.services.Places();
                    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

                    ps.keywordSearch(region, (data: any, status: any) => {
                        if (status === window.kakao.maps.services.Status.OK) {
                            const bounds = new window.kakao.maps.LatLngBounds();

                            const qqq = parsedData.RegionMnyFacltStus[1].row

                            const qqqValues = qqq.map((el:any) => ( el.REFINE_LOTNO_ADDR.slice(3,7) ))
                            const dataValues = data.map((item:any) => ( item.address_name.slice(3,7) ))

                            const matches = qqqValues.filter(value => dataValues.includes(value));

                            


                            data.forEach((place: any) => {
                                const marker = new window.kakao.maps.Marker({
                                    map,
                                    position: new window.kakao.maps.LatLng(place.y, place.x),
                                });

                                // 마커 클릭 이벤트
                                window.kakao.maps.event.addListener(marker, 'click', () => {
                                    infowindow.setContent(
                                        `
                                        <button class=""  style="padding:5px;font-size:12px;">${place.place_name}</button>
                                        `
                                    );
                                    infowindow.open(map, marker);
                                });

                                bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
                            });

                            

                            map.setBounds(bounds); // 검색 결과에 맞게 지도 범위 조정
                        } else {
                            console.error('검색 결과가 없습니다.');
                        }
                    });
                    });
                
            };

            performSearch();
            }


            
        }


        
    }, [region]);

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
                    <A.SearchInput type="text" placeholder="검색어를 입력하세요." />
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
