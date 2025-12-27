import { IBusinessInfo } from '../common/stores/types';

export const fetchStoreList = async (region: string) => {
    try {
        const response = await fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?KEY=${process.env.NEXT_PUBLIC_GMONEY_API_KEY}&Type=json&SIGUN_NM=${region}`);
        const result = await response.json();

        return result.RegionMnyFacltStus[1].row.filter((store: IBusinessInfo) => store.SIGUN_NM === region && store.LEAD_TAX_MAN_STATE_CD !== '03');
    } catch (err) {
        console.error('데이터 불러오기 실패', err);
        return [];
    }
};
