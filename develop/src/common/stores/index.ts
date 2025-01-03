import axios, { AxiosResponse } from "axios";
import { BusinessInfo } from "./type";

export const storeList = async (): Promise<void> => {
  try {
    // API 호출
    const result: AxiosResponse<BusinessInfo> = await axios.get(
      "https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&pIndex=1&pSize=100"
    );

    // API 응답 데이터를 로컬 스토리지에 저장
    localStorage.setItem("BusinessInfoData", JSON.stringify(result.data));


  } catch (error) {
    if (error instanceof Error) {
      console.error("API 요청 중 오류 발생:", error.message);
    }
  }
};
