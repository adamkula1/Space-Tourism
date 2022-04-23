import React from 'react'
import styled from 'styled-components'
import MarsImg from '../../assets/destination/image-mars.webp'
import Data from '../../data/data.json'



const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  color: #fff;
  margin-top: 2.5rem;
`;

const PostTitle = styled.h5`
  font-size: 28px;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 6rem;
  gap: var(--gap, 3rem);
`;

const Span = styled.span`
  margin-right: 1.5rem;
  font-weight: bold;
  color: #383838;
`;

const Img = styled.img`
`;

const Content = styled.section`
  max-width: 445px;
  height: 472px;
`;

const List = styled.ul`
  display: flex;
  gap: var(--gap, 2rem);
  margin: 0;
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
    border-bottom: 2px solid #fff;
  }
`;

const Title = styled.h2`
  font-size: 100px;
  font-family: 'Bellefair';
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  margin-top: 3rem;
`;

const Text = styled.p`
  font-size: 18px;
  font-family: 'Barlow';
  line-height: 32px;
  font-weight: 100;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #979797;
  margin-bottom: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 6rem;
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

const Container = styled.section``;
const Distance = styled.div``;
const Time = styled.div``;

const Mars = () => {

  return (
    <>
    <Main>
      <Container>
        <PostTitle><Span>01</Span>Pick your destination</PostTitle>
        <Img src={MarsImg} alt={Data.destinations[1].name} />
      </Container>
      
      <Content>
        <List>
          <ListItem><Link>Moon</Link></ListItem>
          <ListItem><Link>Mars</Link></ListItem>
          <ListItem><Link>Europa</Link></ListItem>
          <ListItem><Link>Titan</Link></ListItem>
        </List>
        <Title>{Data.destinations[1].name}</Title>
        <Text>{Data.destinations[1].description}</Text>

        <Wrap>
          <Distance>
            <SubheadingOne>Avg. Distance</SubheadingOne>
            <SubheadingTwo>{Data.destinations[1].distance}</SubheadingTwo>
          </Distance>

          <Time>
            <SubheadingOne>Est. Travel time</SubheadingOne>
            <SubheadingTwo>{Data.destinations[1].travel}</SubheadingTwo>
          </Time>
        </Wrap>
      </Content>
    </Main>
    </>
  )
}

export default Mars