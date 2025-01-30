// utils/cacheUtils.ts
// export const saveToCache = async (cacheName: string, url: string, responseData: any) => {
//     try {
//         const cache = await caches.open(cacheName);
//         const response = new Response(JSON.stringify(responseData));
//         await cache.put(url, response);
//         console.log(`✅ 캐시에 저장됨: ${url}`);
//     } catch (error) {
//         console.error("❌ 캐시 저장 중 오류 발생:", error);
//     }
// };

// export const getFromCache = async (cacheName: string, url: string) => {
//     try {
//         const cache = await caches.open(cacheName);
//         const response = await cache.match(url);

//         if (!response) {
//             console.log(`❌ 캐시에서 ${url} 데이터를 찾을 수 없음`);
//             return null;
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("❌ 캐시에서 데이터 가져오기 실패:", error);
//         return null;
//     }
// };

export const getFromApi = async (url: string) => {
    try {
        const response = await fetch(url);

        // 응답이 정상인지 확인
        if (!response.ok) {
            console.error(`❌ API 요청 실패: ${url}`);
            return null;
        }

        const data = await response.json();
        return data; // 데이터를 JSON 형태로 반환
    } catch (error) {
        console.error("❌ API 데이터 가져오기 실패:", error);
        return null;
    }
};
