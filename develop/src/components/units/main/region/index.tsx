import { useState } from 'react';
import { REGION_LIST } from '../../../../common/stores/region';
import { REGION_LIST_ENG } from '../../../../common/stores/region';
import * as A from './styles';

export default function Region() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const selectedRegion = REGION_LIST_ENG[activeIndex];

    const cardCount = [selectedRegion?.name !== 'siheong', selectedRegion?.cash, selectedRegion?.mobile].filter(Boolean).length;

    return (
        <A.Content>
            {/* Left */}
            <A.LeftBox>
                <A.RegionBox>
                    {REGION_LIST.map((el, idx) => (
                        <A.RegionButton key={el.name} onClick={() => setActiveIndex(idx)} isSelected={activeIndex === idx}>
                            {el.name}
                            <A.RegionBorder selectedRegion={activeIndex === idx} className="border-line" />
                        </A.RegionButton>
                    ))}
                </A.RegionBox>

                <A.LogoWrapper key={`logo-wrap-${selectedRegion?.name}`}>{selectedRegion && <A.LogoImg src={`/images/logo/${selectedRegion.name}.png`} alt={`${selectedRegion.alt} 로고`} />}</A.LogoWrapper>
            </A.LeftBox>

            <A.TypeIndicatorWrapper>
                {selectedRegion && (
                    <A.TypeImgBox key={`type-${selectedRegion.name}`}>
                        {selectedRegion.name !== 'siheong' && (
                            <A.TypeImgWrapper label="카드형">
                                <A.TypeImg src="/images/card1.png" title="카드형" alt="카드형" />
                            </A.TypeImgWrapper>
                        )}
                        {selectedRegion.cash && (
                            <A.TypeImgWrapper label="지류형">
                                <A.TypeImg src="/images/card3.png" title="지류형" alt="지류형" />
                            </A.TypeImgWrapper>
                        )}
                        {selectedRegion.mobile && (
                            <A.TypeImgWrapper label="모바일형">
                                <A.TypeImg src="/images/card2.png" title="모바일형" alt="모바일형" />
                            </A.TypeImgWrapper>
                        )}
                    </A.TypeImgBox>
                )}
            </A.TypeIndicatorWrapper>

            {/* Right */}
            <A.RightBox>
                {selectedRegion && (
                    <A.CardBox key={`box-${selectedRegion.name}`} bgColor={selectedRegion.color}>
                        {/* 카드 이미지들 */}
                        <A.CardContainer>
                            {selectedRegion.name !== 'siheong' && <A.Card count={cardCount} src={`/images/card/${selectedRegion.name}.png`} style={{ animationDelay: '0.1s' }} />}
                            {selectedRegion.cash && <A.Card count={cardCount} src={`/images/cash/${selectedRegion.name}.png`} style={{ animationDelay: '0.2s' }} />}
                            {selectedRegion.mobile && <A.Card count={cardCount} src={`/images/mobile/${selectedRegion.name}.png`} style={{ animationDelay: '0.3s' }} />}
                        </A.CardContainer>
                    </A.CardBox>
                )}
            </A.RightBox>
        </A.Content>
    );
}
