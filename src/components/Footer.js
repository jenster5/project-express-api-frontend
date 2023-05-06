import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Jennifers API Project </h3>
      <h3>Technigo Bootcamp May 2023</h3>
      <Image src="./assets/Mylogo.png" alt="my Logo" className="mylogo" />
    </FooterWrapper>
  )
};

const FooterWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color:silver;
`
const Image = styled.img`
max-height: 100px;
`