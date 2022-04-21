import React from 'react'
import styled from "styled-components";
import Navigation from '../components/Navigation'
import bg from '../assets/home/background-home-desktop.jpg'

const Wrapper = styled.div`
    background-image: url(${bg});
    /* background-position: center; */
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
`;

const Home = () => {
  return (
        <Wrapper>
            <Navigation />
        </Wrapper>
    
  )
}

export default Home