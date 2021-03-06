import React, { useState } from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import LogoSvg from '../assets/shared/logo.svg'

const Nav = styled.header`
    margin-left: 3.5rem;
    padding-top: 2%;
    margin-right: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 1024px) {
        margin-left: 2rem;
    }
    @media only screen and (max-width: 768px) {
        padding-top: 0;
    }
    @media only screen and (max-width: 520px) {
        padding-top: 1.5rem;
    }
`;

const List = styled.ul`
    display: flex;
    padding-left: 6.65%;
    padding-right: 17.5%;
    margin: 0;
    gap: var(--gap, 3rem);
    color: #fafafa;
    /* background-color: rgba(128,109,109,.254); */
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    align-items: center;
    z-index: 1;
    @media only screen and (max-width: 1024px) {
        padding-right: 5%;
    }
    @media only screen and (max-width: 768px) {
        gap: var(--gap, 2rem);
    }
    @media only screen and (max-width: 520px) {
        display: none;
    }
    @media only screen and (max-width: 520px) {
        position: fixed;
        inset: 0 0 0 30%;
        padding: min(30vh, 10rem) 2em;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ListItem = styled.li`
    text-transform: uppercase;
`;

const Link = styled.a`
    padding: 2.2rem 0;
    cursor: pointer;
    font-family: 'Barlow Condensed';
    letter-spacing: 2.7px;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 520px) {
        padding: 0.5rem 0;
    }
`;

const Number = styled.span`
    font-weight: 700;
    margin-inline-end: 0.75em;
    @media only screen and (max-width: 768px) {
        display: none;
    }
    @media only screen and (max-width: 520px) {
        display: inherit;
    }
`;

const Line = styled.div`
    flex-grow: 1;
    height: 1px;
    position: relative;
    left: 3rem;
    z-index: 1;
    background: #fafafa;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

const MenuNav = styled.button`
    display: none;
    margin-right: 2rem;
    z-index: 1;
    border: none;
    background: none;
    color: #fafafa;
    @media only screen and (max-width: 520px) {
        display: inherit;
    }
`;

const Logo = styled.div`
    background-image: url(${LogoSvg});
    width: 48px;
    height: 48px;
`;

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }

  return (
    <Nav>
        <Logo />
        <Line />
            <List style={ navbarOpen ? { display: 'inherit'} : {}}>       
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}><ListItem><Link><Number>00</Number>Home</Link></ListItem></NavLink>
                <NavLink to="/destination" className={({ isActive }) => (isActive ? "link-active" : "link")}><ListItem><Link><Number>01</Number>Destination</Link></ListItem></NavLink>
                <NavLink to="/crew" className={({ isActive }) => (isActive ? "link-active" : "link")}><ListItem><Link><Number>02</Number>Crew</Link></ListItem></NavLink>
                <NavLink to="/technology" className={({ isActive }) => (isActive ? "link-active" : "link")}><ListItem><Link><Number>03</Number>Technology</Link></ListItem></NavLink>
            </List>
        <MenuNav onClick={handleToggle}>
            {navbarOpen ? (
                <ClearIcon style={{ color: '#fafafa', width: '2rem', height: 'auto' }} />
                ) : (
                <MenuIcon style={{ color: '#fafafa', width: '2rem', height: 'auto' }} />
            )}
        </MenuNav>
    </Nav>
  )
}

export default Navigation