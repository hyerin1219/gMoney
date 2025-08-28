import { useRef } from 'react';

declare const window: typeof globalThis & { kakao: any };

export function useKakaoMap() {
    // 지도 객체를 저장
    const mapRef = useRef<any>(null);
    // 생성된 마커들을 저장
    const markersRef = useRef<any[]>([]);
    // 스크립트가 로드
    const isScriptLoaded = useRef(false);

    // 지도 생성
    const createMap = (containerId: string, center: { lat: number; lng: number }, level: number) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        mapRef.current = new window.kakao.maps.Map(container, {
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            level,
        });
    };

    // 지도 초기화
    const initMap = (containerId: string, center = { lat: 37.566826, lng: 126.9786567 }, level = 3) => {
        if (isScriptLoaded.current) {
            createMap(containerId, center, level);
            return;
        }

        const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
        script.onload = () => {
            isScriptLoaded.current = true;
            window.kakao.maps.load(() => createMap(containerId, center, level));
        };
        document.head.appendChild(script);
    };

    const updateMarkers = (data: any[]) => {
        if (!mapRef.current) return;

        // 기존 마커 제거
        markersRef.current.forEach((marker) => marker.setMap(null));
        markersRef.current = [];

        // 지도 범위 조정
        const bounds = new window.kakao.maps.LatLngBounds();

        data.forEach((store) => {
            const { REFINE_WGS84_LAT, REFINE_WGS84_LOGT } = store;
            if (!REFINE_WGS84_LAT || !REFINE_WGS84_LOGT) return;

            // 마커 이미지 관련
            const markerImage = new window.kakao.maps.MarkerImage('images/ico_marker.png', new window.kakao.maps.Size(35, 45), { offset: new window.kakao.maps.Point(27, 69) });

            // 마커 생성
            const marker = new window.kakao.maps.Marker({
                image: markerImage,
                map: mapRef.current,
                position: new window.kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT),
            });

            const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
            window.kakao.maps.event.addListener(marker, 'click', () => {
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
            bounds.extend(marker.getPosition());
        });

        // bounds에 맞춰 지도 조정
        mapRef.current.setBounds(bounds);
    };

    return { mapRef, initMap, updateMarkers };
}
