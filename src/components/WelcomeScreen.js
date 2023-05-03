import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { startBookstore } from 'reducers/Bookstore';
import BookTitlesCarousel from './Books';
import { SearchFunction } from './Search';

const WelcomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startBookstore());
  }, [dispatch]);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-7co7srd3ia-lz.a.run.app')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <WelcomeScreenWrapper>
      <h1>Welcome to Bargain Books</h1>
      <h2>Please shop around</h2>
      <BookTitlesCarousel key={books.bookID} bookTitles={books.map((book) => book.title)} />
      <SearchFunction />
    </WelcomeScreenWrapper>
  )
};

export default WelcomeScreen;

const WelcomeScreenWrapper = styled.section`
height: 100vh;
width:100vw;
`

