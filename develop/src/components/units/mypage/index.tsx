import * as A from './styles';

import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useBookmark } from '../../../hooks/useBookmark';

export default function MyPageComponent(): JSX.Element {
    const { user } = useAuth();
    const { regions } = useBookmark();
    const [activeRegion, setActiveRegion] = useState<string | null>(null);
    const regionList = Object.keys(regions);

    useEffect(() => {
        if (!activeRegion && regionList.length > 0) {
            setActiveRegion(regionList[0]);
        }
    }, [regionList]);

    return (
        <section className="Wrap">
            <A.Content>
                <A.Title>{user?.nickname}님의 즐겨찾기</A.Title>

                {Object.keys(regions).length === 0 && <p>즐겨찾기한 가게가 없습니다.</p>}

                {/* region 버튼 */}
                <A.RegionsButtonMark>
                    {regionList.map((region) => (
                        <A.RegionsButton key={region} active={activeRegion === region} onClick={() => setActiveRegion(region)}>
                            {region}
                        </A.RegionsButton>
                    ))}
                </A.RegionsButtonMark>

                {activeRegion && (
                    <A.BookMark>
                        <ul>
                            {regions[activeRegion].map((store) => (
                                <A.BookMarkList key={store.storeId}>
                                    <A.Start src="/images/icon_star.png" alt="" />
                                    {store.name} | {store.address}
                                </A.BookMarkList>
                            ))}
                        </ul>
                    </A.BookMark>
                )}
            </A.Content>
        </section>
    );
}
