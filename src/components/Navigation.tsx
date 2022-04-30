import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


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
    padding: 2.3rem 0;
    padding-left: 6.65%;
    padding-right: 17.5%;
    margin: 0;
    gap: var(--gap, 3rem);
    color: #fff;
    /* background-color: rgba(128,109,109,.254); */
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    align-items: center;
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
    &:hover {
        border-bottom: 2px solid #fff;
    }
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
    background: #fff;
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

const Logo = styled.div``;

const Navigation = () => {

    const navigate = useNavigate();

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }

  return (
    <>
    <Nav>
        <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </Logo>
        <Line />
            <List style={ navbarOpen ? { display: 'inherit'} : {}}>       
                <ListItem><Link onClick={() => navigate("/")}><Number>00</Number>Home</Link></ListItem>
                <ListItem><Link onClick={() => navigate("/destination")}><Number>01</Number>Destination</Link></ListItem>
                <ListItem><Link onClick={() => navigate("/crew")}><Number>02</Number>Crew</Link></ListItem>
                <ListItem><Link onClick={() => navigate("/technology")}><Number>03</Number>Technology</Link></ListItem>
            </List>
        <MenuNav onClick={handleToggle}>
            {navbarOpen ? (
                <ClearIcon style={{ color: '#fafafa', width: '2rem', height: 'auto' }} />
                ) : (
                <MenuIcon style={{ color: '#fafafa', width: '2rem', height: 'auto' }} />
            )}
        </MenuNav>
    </Nav>

    </>
  )
}

export default Navigation