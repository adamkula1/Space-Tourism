import { useState } from 'react'
import styled from "styled-components";
import Navigation from '../components/Navigation'
import BgCrew from '../assets/crew/background-crew-desktop.jpg'
import data from '../data.json'

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
  max-width: 65%;
  height: 85.9vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  color: #fafafa;
`;

const Content = styled.section`
  margin-bottom: 3rem;
  height: 200px;
`;

const Title = styled.h3`
  font-size: 56px;
  font-family: 'Bellefair';
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  margin-top: 1rem;
`;

const Rank = styled.h4`
  font-size: 32px;
  font-family: 'Bellefair';
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  color: #818181;
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
`;

const List = styled.ul`
  display: flex;
  gap: var(--gap, 2rem);
  margin: 0;
  margin-bottom: 7rem;
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
`;


const Container = styled.section``;
const ImgContent = styled.section``;
const ListItem = styled.li``;
const Img = styled.img``;

const Destination = () => {

//Data from the JSON file is stored here
  const [crews, setCrews] = useState(data.crew);
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crews[value];

  return (
    <>
    <Wrapper>
        <Navigation />
      <Main>
          <Container>
            <PostTitle><Span>02</Span>Meet your crew</PostTitle>
            <Rank>Commander</Rank>
            <Title>{name}</Title>
            <Content>
                <Text>{bio}</Text>
            </Content>
           
           <List>
              {crews.map((person, index) => (
                <ListItem key={index}>
                  <Link onClick={() => setValue(index)}>
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
    </>
  )
}

export default Destination