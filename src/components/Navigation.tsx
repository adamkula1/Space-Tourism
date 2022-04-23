import React from 'react'
import styled from "styled-components";

const Nav = styled.header`
    max-width: 1865px;
    margin: auto;
    padding-top: 2%;
    margin-right: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
`;

const List = styled.ul`
    display: flex;
    padding: 2.3rem 0;
    /* padding-left: 8rem; */
    padding-left: 6.65%;
    /* padding-right: 21rem; */
    padding-right: 17.5%;
    margin: 0;
    gap: var(--gap, 3rem);
    color: #fff;
    background-color: rgba(128,109,109,.254);
    backdrop-filter: blur(10px);
    align-items: center;
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
`;

const Number = styled.span`
    font-weight: 700;
    margin-inline-end: 0.75em;
`;


const Lane = styled.div`
    flex-grow: 1;
    height: 1px;
    position: relative;
    left: 4rem;
    z-index: 1;
    background: #fff;
`;

const Navigation = () => {
  return (
    <Nav>
        <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </Logo>
        <Lane />
            <List>
                <ListItem><Link><Number>00</Number>Home</Link></ListItem>
                <ListItem><Link><Number>01</Number>Destination</Link></ListItem>
                <ListItem><Link><Number>02</Number>Crew</Link></ListItem>
                <ListItem><Link><Number>03</Number>Technology</Link></ListItem>
            </List>
    </Nav>
  )
}

export default Navigation