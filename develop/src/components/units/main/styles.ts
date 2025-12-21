import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 30px;
    text-align: center;

    line-height: 1.5;
    // color: #243d43;

    @media (max-width: 400px) {
        padding: 25px;
    }
`;

export const SubTitle = styled.p`
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

const card = keyframes`
  0% {
    transform: translate(-50% , 0);
  }
 50% {
    transform: translate(-50% , 12%);
  }
   100% {
    transform: translate(-50% ,0);
  }
`;
export const Category = styled.div``;
export const CategoryBox = styled.div`
    overflow: hidden;
    width: 100%;
    padding: 15px;
`;
export const CategoryContainer = styled.div`
    display: flex;
    width: fit-content;
    animation: ${scrollLeft} 20s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
`;

export const CategoryCard = styled.div`
    flex: 0 0 auto;
    width: 155px;
    margin-right: 50px;
`;

export const CategoryIconBox = styled.div`
    position: relative;
    height: 100px;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: #c56b43;
    background-color: #edebe5;

    // background-color: #af6545;
`;

export const CategoryIcon = styled.img`
    position: absolute;
    top: -10px;
    left: 50%;

    height: 90px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));

    animation: ${card} 3s linear infinite;
`;

export const CategoryLabel = styled.p`
    font-size: 18px;
    text-align: center;
    color: #111827;
    margin-top: 10px;
`;

// menu

export const MenuListBox = styled.div`
    display: flex;
    justify-content: center;

    gap: 20px;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
export const MenuSubBox = styled.p`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Contact = styled.div`
    position: relative;
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 12px;
    background-color: #e6d471;
    color: #333;
    font-weight: bold;
    font-size: 30px;
    box-shadow: 0 6px 8px rgba(191, 164, 24, 0.5);

    @media (max-width: 600px) {
        width: 100%;
    }

    @media (max-width: 400px) {
        padding: 20px;
        font-size: 20px;
    }
`;

export const Search = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    border-radius: 12px;
    background-color: #ff9393;
    color: #fff;
    font-weight: bold;
    font-size: 30px;

    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(215, 113, 113, 0.4);

    &:hover {
        background-color: #ff7b7b;
        box-shadow: 0 6px 8px rgba(215, 113, 113, 0.5);
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 0 2px 3px rgba(215, 113, 113, 0.4);
        transform: translateY(0);
    }

    @media (max-width: 400px) {
        padding: 20px;
        font-size: 20px;
    }
`;

export const Report = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    border-radius: 12px;
    background-color: #67d7fb;
    color: #fff;
    font-weight: bold;
    font-size: 30px;

    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(5, 148, 194, 0.4);

    &:hover {
        background-color: #4fc0e8;
        box-shadow: 0 6px 8px rgba(5, 148, 194, 0.5);
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 0 2px 3px rgba(5, 148, 194, 0.4);
        transform: translateY(0);
    }

    @media (max-width: 400px) {
        padding: 20px;
        font-size: 20px;
    }
`;

export const MenuTitle = styled.p`
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
