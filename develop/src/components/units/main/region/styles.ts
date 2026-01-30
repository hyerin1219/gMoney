import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface IRegionProps {
    selectedRegion: boolean;
}

interface ILogoProps {
    bgColor: string;
    activeColor: string;
}
interface ICardProps {
    count: number;
}
export const Content = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 500px;
    background-color: #edebe5;
    border-radius: 20px;

    @media (max-width: 1035px) {
        flex-direction: column;
        height: auto;
    }
`;

// Region
export const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;

    @media (max-width: 1035px) {
        flex-direction: column;
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

export const RegionBorder = styled.span<IRegionProps>`
    flex-shrink: 0;
    display: inline-block;
    width: 100%;
    height: 3px;
    border-radius: 15px;
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    background-color: #000000;
    transform: ${({ selectedRegion }) => (selectedRegion ? 'scaleX(1)' : 'scaleX(0)')};
`;

export const RegionButton = styled.button`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 70px;
    font-size: 20px;

    background: none;
    border: none;
    cursor: pointer;

    &:hover .border-line {
        transform: scaleX(1);
    }

    @media (max-width: 1035px) {
        font-size: 18px;
        width: 60px;
    }
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

// 둥둥 떠 있는 듯한 애니메이션
const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const LogoImg = styled.img`
    width: 250px;
    animation: ${floating} 2s ease-in-out infinite;

    @media (max-width: 1110px) {
        width: 200px;
    }

    @media (max-width: 1035px) {
        width: 180px;
    }

    @media (max-width: 600px) {
        width: 150px;
    }
`;

// Card
export const RightBox = styled.div`
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;

    @media (max-width: 1035px) {
        width: 100%;
    }
`;

export const CardBox = styled.div<ILogoProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease;
    border: 5px solid transparent;
    border-radius: 20px;
    padding: 20px;

    border-color: ${({ bgColor }) => bgColor || 'transparent'};

    @media (max-width: 1035px) {
        padding-bottom: 120px;
    }

    @media (max-width: 600px) {
        padding-bottom: 100px;
    }
`;
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Card = styled.img<ICardProps>`
    width: ${({ count }) => {
        if (count === 1) return '50%';
        if (count === 2) return '45%';
        if (count === 3) return '30%';
    }};

    object-fit: contain;
    animation: ${fadeInUp} 1s ease-in-out forwards;

    @media (max-width: 1035px) {
        width: ${({ count }) => {
            if (count === 1) return '40%';
            if (count === 2) return '35%';
            if (count === 3) return '20%';
        }};
    }
`;

// TypeImgBox

export const TypeImgBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const TypeImg = styled.img`
    width: 200px;

    @media (max-width: 1035px) {
        width: 150px;
    }

    @media (max-width: 600px) {
        width: 120px;
    }
`;
