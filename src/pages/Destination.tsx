import React from 'react'
import styled from "styled-components";
import Moon from '../components/destination/Moon'
import Navigation from '../components/Navigation'
import bg from '../assets/destination/background-destination-desktop.jpg'


const Wrapper = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
    /* background-position-y: bottom; */
`;

const Destination = () => {
  return (
    <>
    <Wrapper>
        <Navigation />
        <Moon />
    </Wrapper>
    </>
  )
}

export default Destination