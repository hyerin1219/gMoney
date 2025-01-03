import React from "react"; // 명시적으로 React를 가져옴
import axios, { AxiosResponse } from "axios";
import { BusinessInfo } from "./type";
import { useEffect, useState } from "react";



export default function SettingPage(){
  const [data, setData] = useState<BusinessInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("BusinessInfoData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
          console.log("캐시 데이터 로드 완료", JSON.parse(cachedData));
          return;
        }

        const result: AxiosResponse<BusinessInfo> = await axios.get(
          "https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=caa648fe7b9048bbaac1da9952279c12&Type=json&pIndex=1&pSize=100"
        );

        localStorage.setItem("BusinessInfoData", JSON.stringify(result.data));
        setData(result.data);
        console.log("데이터 저장 및 로드 완료", result.data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("API 요청 중 오류 발생:", error.message);
        }
      }
    };

    fetchData();
  }, []);


}
