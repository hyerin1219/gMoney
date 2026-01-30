import styled from '@emotion/styled';

export const SkipBox = styled.div``;
export const SkipLink = styled.a`
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    text-align: center;

    padding: 5px 0;
    z-index: 999;

    &:focus {
        top: 0;
    }
`;
