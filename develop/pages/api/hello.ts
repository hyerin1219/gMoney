// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = any;
// const cache: { [key: string]: { data: Data; timestamp: number } } = {}; // 캐시 객체
// const CACHE_DURATION = 600 * 1000; // 60초 (1분) 캐싱

// export const getFromApi = async (region: string) => {
//   // 캐시 확인 (유효 시간 내 데이터 반환)
//   if (cache[region] && Date.now() - cache[region].timestamp < CACHE_DURATION) {
//     console.log(`✅ 캐시에서 데이터 반환: ${region}`);
//     return cache[region].data;
//   }

//   try {
//     const response = await fetch(
//       `https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&SIGUN_NM=${region}`
//     );

//     if (!response.ok) {
//       throw new Error(`API 요청 실패: ${response.status}`);
//     }

//     const data = await response.json();

//     // 캐시에 저장
//     cache[region] = { data, timestamp: Date.now() };
//     console.log(`📌 새로운 데이터 캐싱: ${region}`);

//     return data;
//   } catch (error) {
//     console.error("❌ API 데이터 가져오기 실패:", error);
//     return null;
//   }
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const region = (req.query.region as string) || "수원시";
//   const data = await getFromApi(region);

//   if (data) {
//     res.status(200).json(data);
//   } else {
//     res.status(500).json({ error: "API 요청 중 오류 발생" });
//   }
// }
