import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideUpFade = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    min-height: 520px;
    background: #f8f7f4;
    border-radius: 30px;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.02), 0 10px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    @media (max-width: 1035px) {
        flex-direction: column;
        height: auto;
    }
`;

// Region
export const LeftBox = styled.div`
    width: 45%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1035px) {
        width: 100%;
        gap: 20px;
    }
`;

export const RegionBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 1035px) {
        justify-content: center;
        gap: 5px 10px;
    }
    @media (max-width: 600px) {
        gap: 8px 5px;
    }
`;

export const RegionBorder = styled.span<{ selectedRegion: boolean }>`
    display: block;
    width: 100%;
    height: 2px;
    background: #222;
    transform: ${(props) => (props.selectedRegion ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
`;

export const RegionButton = styled.button<{ isSelected: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: ${(props) => (props.isSelected ? '700' : '400')};
    color: ${(props) => (props.isSelected ? '#111' : '#888')};
    transition: all 0.2s ease;
    padding: 5px 0;

    &:hover {
        color: #111;
        .border-line {
            transform: scaleX(1);
        }
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    animation: ${scaleIn} 0.5s ease-out;
`;

// 둥둥 떠 있는 듯한 애니메이션
const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const LogoImg = styled.img`
    width: 230px;
    animation: ${floating} 2s ease-in-out infinite;

    @media (max-width: 1110px) {
        width: 200px;
        height: 150px;
        object-fit: contain;
    }
`;

// Card
export const RightBox = styled.div`
    width: 55%;
    padding: 20px;
    @media (max-width: 1035px) {
        width: 100%;
        height: 450px;
    }
`;

export const CardBox = styled.div<{ bgColor: string }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px
    border-radius: 24px;
    background: #fff;
    border-radius: 30px;
    border: 1px solid rgba(0, 0, 0, 0.05);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 24px;
        border: 4px solid ${(props) => props.bgColor || 'transparent'};
        opacity: 0.4;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 90%;
`;
export const Card = styled.img<{ count: number }>`
    width: ${(props) => 100 / props.count - 6}%;
    max-width: 230px;
    object-fit: contain;
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
    animation: ${slideUpFade} 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
`;

// TypeImgBox
export const TypeIndicatorWrapper = styled.div`
    position: absolute;
    bottom: 30px;
    left: 45%;
    transform: translateX(-50%);
    z-index: 5;
    @media (max-width: 1035px) {
        position: relative;
        left: 50%;
        bottom: 0;
        padding: 0;
    }
`;
export const TypeImgBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px 20px;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    animation: ${slideUpFade} 0.4s ease;
`;

export const TypeImgWrapper = styled.div<{ label: string }>`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &::before {
        content: '${(props) => props.label}'; // props로 받은 label 출력
        position: absolute;
        top: -35px; // 이미지 위쪽으로 배치
        left: 50%;
        transform: translateX(-50%) translateY(10px);

        padding: 4px 10px;
        background-color: rgba(0, 0, 0, 0.75);
        color: white;
        font-size: 12px;
        border-radius: 4px;
        white-space: nowrap;

        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in-out;
        z-index: 10;
    }

    &:hover::before {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0); // 슥 올라오는 효과
    }
`;
export const TypeImg = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;

    transition: opacity 0.2s;
`;
