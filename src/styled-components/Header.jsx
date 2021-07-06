import styled from "styled-components";

export const Background = styled.div`
    height : 25vh;
    width : 100%;
    background-color : #d2d2d2;
    top : 0;
`;

export const Logo = styled.img`
    height : 14vh;
    display: block;
    margin-right : auto;
    margin-left: auto;
    padding-top : 3vh;
`;

export const Menu = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 3vh;
`;

export const P = styled.p`
    padding-right : 3vw;
    padding-left: 3vw;
    cursor: pointer;
`;

export const ItemMenu = styled.div`

`;

export const PointeurMenu = styled.div`
    width : 1vw;
    height: 0.8vh;
    background-color: #af2f1e;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -0.5vh;
`;

export const Marker = styled.div`   
    display: ${(props) => props.active ? "display: block; height: 0.8vh; width : 1vw;  background-color: #af2f1e; margin-right: auto; margin-left: auto; margin-top: -0.5vh;" : "none"};
`