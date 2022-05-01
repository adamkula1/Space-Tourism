import { useState } from 'react'
import styled from "styled-components";
import Navigation from '../components/Navigation'
import BgTechnology from '../assets/technology/background-technology-desktop.jpg'
import BgTechnologyDevice from '../assets/technology/background-technology-tablet.jpg'
import data from '../data.json'
import AnimatedPage from '../assets/css/AnimatedPage';

const Wrapper = styled.div`
    background-image: url(${BgTechnology});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
    @media only screen and (max-width: 1220px) {
    background-image: url(${BgTechnologyDevice});
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 13%;
  gap: 5rem;
  align-items: center;
  color: #fafafa;
  @media only screen and (max-width: 1400px) {
    padding-left: 2%;
    gap: 0;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    padding-left: 0;
  }
`;

const Content = styled.section``;

const PreSection = styled.aside`
  display: flex;
  gap: 4rem;
  height: 345px;
  @media only screen and (max-width: 1220px) {
    gap: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    height: auto;
  }
`;

const PostTitle = styled.h5`
  margin: auto;
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  color: #fafafa;
  margin-top: 5rem;
  padding-left: 13%;
  @media only screen and (max-width: 1400px) {
    padding-left: 2%;
  }
  @media only screen and (max-width: 1220px) {
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 1024px) {
    padding-left: 2rem;
    margin: 4rem 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 3rem 0;
    font-size: 20px;
  }
  @media only screen and (max-width: 520px) {
    margin: 2.5rem 0;
    text-align: center;
    padding-left: 0;
  }
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

const Title = styled.h3`
  font-size: 56px;
  font-family: 'Bellefair';
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: var(--gap, 2rem);
  margin: 0;
  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    margin-top: 4rem;
  }
  @media only screen and (max-width: 520px) {
    margin-top: 2rem;
  }
`;

const ListItem = styled.li`
  width: fit-content;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 13px;
  font-size: 32px;
  font-family: 'Bellefair';
  font-weight: 200;
  color: #fafafa;
  border: 1px solid #8b8b8b;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #fafafa;
    color: #0B0D17;
  }
  @media only screen and (max-width: 768px) {
    padding: 4px;
  }
  @media only screen and (max-width: 520px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const Span = styled.span`
  margin-right: 1.5rem;
  font-weight: bold;
  color: #383838;
`;

const Text = styled.p`
  max-width: 438px;
  font-size: 18px;
  font-family: 'Barlow';
  line-height: 32px;
  font-weight: 100;
  @media only screen and (max-width: 1024px) {
    margin: auto;
    max-width: 480px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 430px;
  }
  @media only screen and (max-width: 520px) {
    font-size: 15px;
    padding: 0 2rem;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  font-family: 'Barlow Condensed';
  letter-spacing: 2.7px;
  color: #D0D6F9;
  text-transform: uppercase;
  @media only screen and (max-width: 520px) {
    font-size: 14px;
  }
`;

const Wrap = styled.div`
  @media only screen and (max-width: 1024px) {
    margin: auto;
  }
`;
const Container = styled.section``;
const Img = styled.img`
  @media only screen and (max-width: 1220px) {
    width: 380px;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ImgDevice = styled.img`
  @media only screen and (min-width: 1024px) {
    display: none;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;


const Destination = () => {

//Data from the JSON file is stored here
  const [technology, setTechnology] = useState(data.technology);
  const [value, setValue] = useState(0)

  const { name, images, description } = technology[value];

  return (
    <>
    <Wrapper>
        <Navigation />
        <PostTitle><Span>03</Span>Space launch 101</PostTitle>
      <Main>
          <Content>
            <PreSection>
                <List>
                    {technology.map((rocket, index) => (
                        <ListItem key={index}>
                                <Link onClick={() => setValue(index)} className={`${index === value && "bg-active"}`}>
                                    {rocket.id}
                                </Link>
                        </ListItem>
                    ))}
                </List>
                <Wrap>
                <AnimatedPage>
                    <Desc>The technology ...</Desc>
                    <Title>{name}</Title>
                    <Text>{description}</Text>
                    </AnimatedPage>
                </Wrap>
            </PreSection>
          </Content>
          <Container>
            <Img src={images.portrait} title={name} alt={name} />
            <ImgDevice src={images.landscape} title={name} alt={name} />
          </Container>
      </Main>
    </Wrapper>
    </>
  )
}

export default Destination