import React from 'react'
import styled from "styled-components";
import Navigation from '../components/Navigation'
import BgHome from '../assets/home/background-home-desktop.jpg'
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    background-image: url(${BgHome});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
    background-position-y: bottom;
`;

const Main = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: #fafafa;
  margin-top: 10rem;
`;

const Content = styled.section`
  max-width: 450px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 150px;
  font-family: 'Bellefair';
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const PostTitle = styled.h5`
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
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
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 15vw;
  background-color: #fafafa;
  padding: 2em;
  border-radius: 100%;
  cursor: pointer;
`;

const Home = () => {

  const navigate = useNavigate();

  return (
      <>
         <Wrapper>
            <Navigation />
            <Main>
              <Content>
                <PostTitle>So, you want to travel to</PostTitle>
                <Title>Space</Title>
                <Text>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                  Well sit back, and relax because we’ll give you a truly out of this world experience!
                </Text>
              </Content>
              <Circle>
                <Button onClick={() => navigate("/destination")}>Explore</Button>
              </Circle>
            </Main>
         </Wrapper>
      </>
  )
}

export default Home