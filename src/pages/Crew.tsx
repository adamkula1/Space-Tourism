import { useState } from 'react'
import styled from "styled-components";
import Navigation from '../components/Navigation'
import BgCrew from '../assets/crew/background-crew-desktop.jpg'
import data from '../data.json'
import AnimatedPage from '../assets/css/AnimatedPage';

const Wrapper = styled.div`
    background-image: url(${BgCrew});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    transition: .5s ease;
    background-color: #161515;
`;

const Main = styled.main`
  max-width: 1440px;
  height: 85.9vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  color: #fafafa;
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: auto;
    margin-top: 4rem;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Content = styled.section`
  margin-bottom: 3rem;
  height: 200px;
  @media only screen and (max-width: 1120px) {
    max-width: 445px;
    margin: auto;
    margin-bottom: 0;
    height: auto;
  }
  @media only screen and (max-width: 520px) {
    padding: 0 1.5rem;
  }
  @media only screen and (max-width: 375px) {
    order: 4;
  }
`;

const Title = styled.h3`
  font-size: 56px;
  font-family: 'Bellefair';
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  margin-top: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 38px;
  }
  @media only screen and (max-width: 375px) {
    order: 3;
    font-size: 24px;
  }
`;

const Rank = styled.h4`
  font-size: 32px;
  font-family: 'Bellefair';
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  color: #818181;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 375px) {
    order: 2;
    font-size: 16px;
  }
`;

const PostTitle = styled.h5`
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 8rem;
  gap: var(--gap, 3rem);
  @media only screen and (max-width: 1120px) {
    margin-bottom: 4rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }

  @media only screen and (max-width: 375px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: var(--gap, 2rem);
  margin: 0;
  margin-bottom: 7rem;
  @media only screen and (max-width: 1120px) {
    justify-content: center;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 375px) {
    order: 1;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Link = styled.a`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #464646;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;;
  }
  @media only screen and (max-width: 375px) {
    width: 13px;
    height: 13px;
  }
`;

const Span = styled.span`
  margin-right: 1.5rem;
  font-weight: bold;
  color: #383838;
`;

const Text = styled.p`
  max-width: 445px;
  font-size: 18px;
  font-family: 'Barlow';
  line-height: 32px;
  font-weight: 100;
  padding-bottom: 2.5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1120px) {
    margin-bottom: 0;
    margin-right: 0;
  }
  @media only screen and (max-width: 520px) {
    font-size: 15px;
  }
`;


const Container = styled.section`
  padding: 0 1.5rem;
  @media only screen and (max-width: 375px) {
    order: 2;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ImgContent = styled.section`
  @media only screen and (max-width: 375px) {
    order: 1;
    width: 90%;
    border-bottom: 1px solid #cacaca;
  }
`;
const ListItem = styled.li``;

const Img = styled.img`
  @media only screen and (max-width: 768px) {
    max-width: 70%;
  }

  @media only screen and (max-width: 375px) {
    order: 1;
  }
`;

const PostTitleMobile = styled.h5`
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 8rem;
  gap: var(--gap, 3rem);
  @media only screen and (max-width: 1120px) {
    margin-bottom: 4rem;
    text-align: left;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: 375px) {
    display: none;
  }
`;

const Destination = () => {

//Data from the JSON file is stored here
  const [crews, setCrews] = useState(data.crew);
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crews[value];

  return (
    <Wrapper>
        <Navigation />
      <Main>
          <PostTitleMobile><Span>02</Span>Meet your crew</PostTitleMobile>
            <Container>
              <AnimatedPage>
                <PostTitle><Span>02</Span>Meet your crew</PostTitle>
                <Rank>Commander</Rank>
                <Title>{name}</Title>
                <Content>
                    <Text>{bio}</Text>
                </Content>
              </AnimatedPage>
              <List>
                  {crews.map((person, index) => (
                    <ListItem key={index}>
                      <Link onClick={() => setValue(index)} className={`${index === value && "bg-active"}`}>
                      </Link>
                    </ListItem>
                  ))}
              </List>
            </Container>
          <ImgContent>
            <Img src={images.png} title={name} alt={name} />
          </ImgContent>
      </Main>
    </Wrapper>
  )
}

export default Destination