import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useLoginCheck = () => {
  const router = useRouter();

  useEffect(() => {
    // 클라이언트 환경에서만 localStorage 접근
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("kakao_e203d9a5eda596228bf93e7983cf46a3");

      if (!token) {
        console.log("토큰 없음");
        window.alert("로그인 후 이용해 주세요!")
        router.push("/"); // 토큰이 없으면 홈으로 리디렉션
      }
    }
  }, [router]);
};
