import { useState } from 'react';
import { REGION_LIST } from '../../../../common/stores/region';
import { REGION_LIST_ENG } from '../../../../common/stores/region';
import * as A from './styles';

export default function Region() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const selectedRegion = REGION_LIST_ENG[activeIndex];

    const cardCount = [selectedRegion?.name !== 'siheong', selectedRegion?.cash, selectedRegion?.mobile].filter(Boolean).length;
    console.log(cardCount);

    return (
        <A.Content>
            {/* Left: Region List */}
            <A.LeftBox>
                <A.RegionBox>
                    {REGION_LIST.map((el, idx) => (
                        <A.RegionButton key={el.name} onClick={() => setActiveIndex(idx)}>
                            {el.name}
                            <A.RegionBorder selectedRegion={activeIndex === idx} className="border-line" />
                        </A.RegionButton>
                    ))}
                </A.RegionBox>
                {selectedRegion && <A.LogoImg src={`/images/logo/${selectedRegion.name}.png`} alt={`${selectedRegion.alt} 로고`} />}
            </A.LeftBox>

            {/* 카드, 모바일, 지류 */}
            <div>
                {selectedRegion && (
                    <A.TypeImgBox key={`box-${selectedRegion.name}`}>
                        {selectedRegion.name === 'siheong' ? '' : <A.TypeImg src={`/images/card1.png`} />}
                        {selectedRegion.cash && <A.TypeImg src={`/images/card3.png`} />}
                        {selectedRegion.mobile && <A.TypeImg src={`/images/card2.png`} />}
                    </A.TypeImgBox>
                )}
            </div>

            {/* 지역별 로고 */}

            {/* 지역별 카드, 지류, 모바일 사진 */}
            <A.RightBox>
                {selectedRegion && (
                    <A.CardBox key={`box-${selectedRegion.name}`} activeColor={selectedRegion.color} bgColor={selectedRegion.color}>
                        {/* 지역화폐 카드 */}
                        {selectedRegion.name !== 'siheong' && <A.Card count={cardCount} key={`logo-${selectedRegion.name}`} src={`/images/card/${selectedRegion.name}.png`} alt={`${selectedRegion.alt} 지역화폐 카드`} />}

                        {/* 지역화폐 지류 */}
                        {selectedRegion.cash && <A.Card count={cardCount} key={`cash-${selectedRegion.name}`} src={`/images/cash/${selectedRegion.name}.png`} alt={`${selectedRegion.alt} 지역화폐 지류`} />}

                        {/* 지역화폐 모바일 */}
                        {selectedRegion.mobile && <A.Card count={cardCount} key={`mobile-${selectedRegion.name}`} src={`/images/mobile/${selectedRegion.name}.png`} alt={`${selectedRegion.alt} 지역화폐 모바일`} />}
                    </A.CardBox>
                )}
            </A.RightBox>
        </A.Content>
    );
}
