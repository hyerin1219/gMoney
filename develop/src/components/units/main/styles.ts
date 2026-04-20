import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const ScrollSection = styled.div`
    opacity: 0;
    transform: translateY(30px);
    transition: all 2s cubic-bezier(0.22, 1, 0.36, 1);

    &.show {
        opacity: 1;
        transform: translateY(0);
    }
`;
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 100%;
`;

export const Content = styled.article``;

export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 875px) {
        flex-direction: column;
    }
`;

export const TitleImg = styled.img`
    width: 400px;
    transition: transform 0.5s ease;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));

    &:hover {
        transform: scale(1.05) rotate(-2deg);
    }
`;

export const TitleSubTit = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: #c56b43;

    @media (max-width: 600px) {
        font-size: 20px;
    }
`;
export const TitleSubTxt = styled.p`
    font-size: 30px;
    font-weight: bold;
    text-align: justify;
    line-height: 1.2;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const Title = styled.h2`
    font-size: 80px;
    color: #243d43;
    margin: 15px 0;
    @media (max-width: 600px) {
        font-size: 50px;
    }
`;

export const SubTitle = styled.h3`
    flex-shrink: 0;
    font-size: 25px;
    font-weight: bold;
    text-align: justify;
    line-height: 1.3;
    margin-bottom: 10px;
    // color: #243d43;
`;

// 카테고리

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Category = styled.div``;
export const CategoryBox = styled.div`
    overflow: hidden;
    width: 100%;
    padding: 15px;
`;
export const CategoryContainer = styled.ul`
    display: flex;
    width: fit-content;
    animation: ${scrollLeft} 20s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
`;

export const CategoryCard = styled.li`
    flex: 0 0 auto;
    width: 155px;
    margin-right: 50px;
`;

export const CategoryIconBox = styled.div`
    position: relative;
    height: 100px;
    border-radius: 50px;
    background-color: #edebe5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;

    &:hover {
        background-color: #fff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
    }
`;

export const CategoryIcon = styled.img`
    position: absolute;
    top: -10px;
    left: 50%;
    height: 90px;
    transform: translateX(-50%);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
`;

export const CategoryLabel = styled.p`
    font-size: 18px;
    text-align: center;
    color: #111827;
    margin-top: 10px;
`;

// ====================== 메뉴

export const MenuListBox = styled.div`
    display: flex;
    justify-content: center;

    gap: 20px;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
export const MenuSubBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const shine = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const MenuBase = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
        transform: skewX(-25deg);
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        &::after {
            animation: ${shine} 0.6s focus;
        }
    }

    &:active {
        transform: translateY(-2px);
    }
`;

export const Contact = styled(MenuBase)`
    flex-direction: column;
    width: 50%;
    background: #ffec86;
    color: #333;
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Search = styled(MenuBase)`
    width: 100%;
    background-color: #ff9393;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`;

export const Report = styled(MenuBase)`
    width: 100%;
    background-color: #67d7fb;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`;

export const MenuTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    font-weight: bold;
`;
export const MenuSubTitle = styled.p`
    font-size: 25px;
    margin-top: 10px;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const MenuImg = styled.img`
    width: 80px;

    @media (max-width: 400px) {
        width: 60px;
    }
`;
