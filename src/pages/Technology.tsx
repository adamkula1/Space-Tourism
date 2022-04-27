import { useState } from 'react'
import styled from "styled-components";
import Navigation from '../components/Navigation'
import BgDestination from '../assets/destination/background-destination-desktop.jpg'
import data from '../data.json'



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
  align-items: center;
  color: #fff;
`;

const PostTitle = styled.h5`
  max-width: 1390px;
  margin: auto;
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  color: #fff;
  margin-top: 5rem;
`;

const Span = styled.span`
  margin-right: 1.5rem;
  font-weight: bold;
  color: #383838;
`;

const Content = styled.section`
  width: 615px;
`;

const PreSection = styled.aside`
  display: flex;
  gap: 4rem;
  height: 344px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: var(--gap, 2rem);
  margin: 0;
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
  &:hover {
    background-color: #fafafa;
    color: #0B0D17;
  }
`;

const Title = styled.h3`
  font-size: 56px;
  font-family: 'Bellefair';
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
`;

const Text = styled.p`
  max-width: 438px;
  font-size: 18px;
  font-family: 'Barlow';
  line-height: 32px;
  font-weight: 100;
  /* padding-bottom: 2.5rem;
  margin-bottom: 2rem; */
`;

const Desc = styled.p`
  font-size: 16px;
  font-family: 'Barlow Condensed';
  letter-spacing: 2.7px;
  color: #D0D6F9;
  text-transform: uppercase;
`;

const Wrap = styled.div`
  
`;

const Container = styled.section``;
const Img = styled.img``;

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
                            
                                <Link onClick={() => setValue(index)}>
                                    {rocket.id}
                                </Link>
                           
                        </ListItem>
                    ))}
                </List>
                <Wrap>
                    <Desc>The technology ...</Desc>
                    <Title>{name}</Title>
                    <Text>{description}</Text>
                </Wrap>
            </PreSection>
          </Content>

          <Container>
            <Img src={images.portrait} title={name} alt={name} />
          </Container>
      </Main>
    </Wrapper>
    </>
  )
}

export default Destination