import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { startBookstore } from 'reducers/Bookstore';
import BookTitlesCarousel from './Books';
import { SearchFunction } from './Search';
import { Footer } from './Footer';

const WelcomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startBookstore());
  }, [dispatch]);

  const books = useSelector((store) => store.bookstore.bookCarousel)
  const authors = useSelector((store) => store.bookstore.authorsSearch)

  return (
    <WelcomeScreenWrapper>
      <OuterHeaderWrapper>
        <HeaderWrapper>
          <h1>Welcome to Bargain Books</h1>
          <p>Let us help you find your next adventure!</p>
        </HeaderWrapper>
      </OuterHeaderWrapper>
      <CarouselWrapper>
        <h1> Scroll here to see whats in stock </h1>
        <BookTitlesCarousel bookTitles={books} />
      </CarouselWrapper>
      <SearchFunction authorsSearch={authors} />
      <Footer />
    </WelcomeScreenWrapper>
  )
};

export default WelcomeScreen;

const WelcomeScreenWrapper = styled.section`
width:100vw;
background-image: url(./assets/bookstore.jpg);
background-size: cover;
background-repeat: no-repeat;
text-align: center;
display: flex;
flex-direction: column;
`
const OuterHeaderWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin-top:10%;
`
const HeaderWrapper = styled.section`
background:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)); 
text-align:center;
color:white;
line-height: 2.5rem;
padding:15px;
border: 5px solid rgba(255, 255, 255, 0.3);
border-radius: 10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
font-size: 2.5rem;

p{
  font-size: 1.9rem;
}
`
const CarouselWrapper = styled.section`
h1{
  font-size: 2.5rem;
  color:white;
  margin-bottom: 5px;
}

.react-multi-carousel-track {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)); 
  color: lightgrey;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  font-size: 2.5rem;
  gap:5px;

  & > * {
    background-image: url(./assets/bookcover.jpg);
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 5px;
    height:250px;
    }}`;

