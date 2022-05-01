import React from 'react'
import styled, { keyframes } from "styled-components";
import Navigation from '../components/Navigation'
import BgHome from '../assets/home/background-home-desktop.jpg'
import BgHomeDevice from '../assets/home/background-home-tablet.jpg'
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../assets/css/AnimatedPage';

const Wrapper = styled.div`
    background-image: url(${BgHome});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
    background-position-y: bottom;
    @media only screen and (max-width: 1024px) {
      background-image: url(${BgHomeDevice});
      background-position-y: center;
    }
`;

const Main = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: #fafafa;
  margin-top: 10rem;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    text-align: center;
    gap: 4rem;
  }

  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media only screen and (max-width: 520px) {
    margin-top: 2rem;
  }
`;

const Content = styled.section`
  max-width: 450px;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    max-width: 485px;
  }
  @media only screen and (max-width: 520px) {
    max-width: 420px;
  }
`;

const Title = styled.h1`
  font-size: 150px;
  font-family: 'Bellefair';
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 520px) {
    font-size: 80px;
  }
`;

const PostTitle = styled.h5`
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  @media only screen and (max-width: 520px) {
    font-size: 16px;
  }
`;

const Button = styled.a`
  font-size: 32px;
  font-family: 'Bellefair';
  text-transform: uppercase;
  font-weight: normal;
  color: #0B0D17;
  letter-spacing: 2px;
`;

const Text = styled.p`
  font-size: 18px;
  font-family: 'Barlow';
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 0;
  @media only screen and (max-width: 520px) {
    padding: 0 1.5rem;
  }
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

const CircleAnimation = styled.div`
  display: flex;
  width: 406px;
  height: 406px;
`

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 242px;
  height: 242px;
  background-color: #fafafa;
  padding: 2em;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 50px solid #ffffff26;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    transition: border 0.40s linear;
    animation-iteration-count: infinite;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;




const Home = () => {

  const navigate = useNavigate();

  return (
         <Wrapper>
            <Navigation />
            <Main>
              <Content>
              <AnimatedPage>
                <PostTitle>So, you want to travel to</PostTitle>
                <Title>Space</Title>
                <Text>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                  Well sit back, and relax because we’ll give you a truly out of this world experience!
                </Text>
                </AnimatedPage>
              </Content>
              <CircleAnimation>
              <Circle>
                <Button onClick={() => navigate("/destination")}>Explore</Button>
              </Circle>
              </CircleAnimation>
            </Main>
         </Wrapper>
  )
}

export default Home