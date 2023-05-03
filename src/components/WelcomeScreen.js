import styled, { Button } from '@material-ui/core';
import React from 'react';

export const welcomeScreen = () => {
  return (
    <WelcomeScreenWrapper>
      <Button />
      <Background />
    </WelcomeScreenWrapper>
  )
};

const WelcomeScreenWrapper = styled.section`
height: 100vh;
width:100vw;
`

const Background = styled.section`
background-image: url();
`

