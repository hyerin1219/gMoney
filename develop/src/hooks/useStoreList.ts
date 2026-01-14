import { IBusinessInfo } from '../common/stores/types';

interface IFetchStoreListParams {
    region: string;
    page?: number;
    size?: number;
}

interface IFetchStoreListResult {
    data: IBusinessInfo[];
    totalCount: number;
}

export const fetchStoreList = async ({ region, page = 1, size = 20 }: IFetchStoreListParams): Promise<IFetchStoreListResult> => {
    try {
        const response = await fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus` + `?KEY=${process.env.NEXT_PUBLIC_GMONEY_API_KEY}` + `&Type=json` + `&SIGUN_NM=${region}` + `&pIndex=${page}` + `&pSize=${size}`);

        const result = await response.json();

        const rows: IBusinessInfo[] = result?.RegionMnyFacltStus?.[1]?.row ?? [];

        const totalCount = result?.RegionMnyFacltStus?.[0]?.head?.[0]?.list_total_count ?? 0;

        return {
            data: rows.filter((store) => store.SIGUN_NM === region && store.LEAD_TAX_MAN_STATE_CD !== '03'),

            totalCount,
        };
    } catch (err) {
        console.error('데이터 불러오기 실패', err);
        return {
            data: [],
            totalCount: 0,
        };
    }
};
