import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Week 13 Technigo API Project </h3>
      <ImageWrapper>
        <img src="./assets/Mylogo.png" alt="my Logo" className="mylogo" />
      </ImageWrapper>
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
const ImageWrapper = styled.image`
.mylogo{
max-height: 100px;
}
`