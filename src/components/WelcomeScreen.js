import React from 'react';
import styled from 'styled-components/macro';
import BookTitlesCarousel from './Books';

const WelcomeScreen = () => {
  return (
    <WelcomeScreenWrapper>
      <h1>Welcome to Bargain Books</h1>
      <h2>Please shop around</h2>
      <BookTitlesCarousel />
    </WelcomeScreenWrapper>
  )
};

export default WelcomeScreen;

const WelcomeScreenWrapper = styled.section`
height: 100vh;
width:100vw;
`

