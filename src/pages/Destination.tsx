import { useState } from 'react'
import styled, { keyframes } from "styled-components";
import Navigation from '../components/Navigation'
import BgDestination from '../assets/destination/background-destination-desktop.jpg'
import data from '../data.json'
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../assets/css/AnimatedPage';

const Wrapper = styled.div`
    background-image: url(${BgDestination});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  color: #fafafa;
  margin-top: 2.5rem;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 0;
    gap: 3rem;
    padding-bottom: 3rem;
  }
`;

const Content = styled.section`
  max-width: 440px;
  @media only screen and (max-width: 1024px) {
    max-width: 615px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 505px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 6rem;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    gap: 5rem
  }
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const PostTitle = styled.h5`
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  color: #fafafa;
  margin-bottom: 6rem;
  gap: var(--gap, 3rem);
  @media only screen and (max-width: 1024px) {
    text-align: left;
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (max-width: 520px) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-size: 100px;
  font-family: 'Bellefair';
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  margin-top: 3rem;
  @media only screen and (max-width: 520px) {
    font-size: 56px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: var(--gap, 2rem);
  margin: 0;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const ListItem = styled.li`
  text-transform: uppercase;
`;

const Link = styled.a`
  cursor: pointer;
  font-family: 'Barlow Condensed';
  letter-spacing: 2.7px;
  font-weight: 200;
  padding: 0.5rem 0;
  &:hover {
    border-bottom: 2px solid #fafafa;
  }
`;

const Span = styled.span`
  margin-right: 1.5rem;
  font-weight: bold;
  color: #383838;
`;

const Text = styled.p`
  font-size: 18px;
  font-family: 'Barlow';
  line-height: 32px;
  font-weight: 100;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #979797;
  margin-bottom: 2rem;
  @media only screen and (max-width: 520px) {
    font-size: 15px;
  }
`;

const SubheadingOne = styled.p`
  font-size: 14px;
  font-family: 'Barlow Condensed';
  letter-spacing: 2.36px;
  text-transform: uppercase;
  font-weight: 200;
`;

const SubheadingTwo = styled.p`
  font-size: 28px;
  font-family: 'Bellefair';
  text-transform: uppercase;
  margin: 0;
`;

const Container = styled.section`
  @media only screen and (max-width: 1024px) {
      width: 90%;
    }
`;

const Distance = styled.div``;
const Time = styled.div``;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  } 
`

const Img = styled.img`
  animation: ${rotation} 140s infinite linear;
  @media only screen and (max-width: 768px) {
      width: 60%;
      height: auto;
    }
`;



const Destination = () => {

//Data from the JSON file is stored here
  const [destinations, setDestinations] = useState(data.destinations);
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = destinations[value];

  

  return (
    <Wrapper>
        <Navigation />
      <Main>
          <Container>
            <PostTitle><Span>01</Span>Pick your destination</PostTitle>
            <Img src={images.png} title={name} alt={name} />
          </Container>
          <Content>
            <List>
              {destinations.map((planet, index) => (
               <ListItem key={index}>
                  <Link onClick={() => setValue(index)} className={`${index === value && "border-active"}`}>
                    {planet.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <AnimatedPage>
            <Title>{name}</Title>
            <Text>{description}</Text>

            <Wrap>
              <Distance>
                <SubheadingOne>Avg. Distance</SubheadingOne>
                <SubheadingTwo>{distance}</SubheadingTwo>
              </Distance>

              <Time>
                <SubheadingOne>Est. Travel time</SubheadingOne>
                <SubheadingTwo>{travel}</SubheadingTwo>
              </Time>
            </Wrap>
            </AnimatedPage>
          </Content>
      </Main>
    </Wrapper>
    
  )
}

export default Destination