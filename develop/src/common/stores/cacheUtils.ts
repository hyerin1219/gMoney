export const getFromApi = async (url: string) => {
    try {
        const response = await fetch(url);

        // 응답이 정상인지 확인
        if (!response.ok) {
            console.error(`API 요청 실패: ${url}`);
            return null;
        }

        const data = await response.json();

        return data; // 데이터를 JSON 형태로 반환
    } catch (error) {
        console.error('API 데이터 가져오기 실패:', error);
        return null;
    }
};
// 안쓰는 듯;
