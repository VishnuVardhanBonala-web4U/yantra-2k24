import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;
export const Logo = styled.img`
    position: absolute;
    top: 0;
    left: 40vw;
`;

export const NavLink = styled(Link)`

    color: blue;
    font-size: 3.5rem;
    position: absolute;
    top: 2%;
    left: 3%;
    text-decoration: none;
    font-family: 'Nabla', cursive;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 3.5vh;
    right: 4vw;
    cursor: pointer;
    color: #fff;


`;

export const Bars = styled(BiMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
    margin: 0;
`;