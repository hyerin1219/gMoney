import styled from '@emotion/styled';

export const Content = styled.div`
    display: flex;
`;

export const HalfBox = styled.div`
    width: 50%;
`;

export const RegionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    gap: 15px;
`;

export const RegionBorder = styled.span`
    flex-shrink: 0;
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: #000000;
    border-radius: 15px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
`;

export const RegionButton = styled.button`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: fit-content;
    font-size: 20px;

    &:hover .border-line {
        transform: scaleX(1);
    }
`;

export const Logo = styled.img`
    width: 100%;
`;
