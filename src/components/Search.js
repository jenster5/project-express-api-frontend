/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components';

export const SearchFunction = () => {
  return (
    <SearchWrapper>
      <InnerWrapper>
        <h1>Search available API endpoints</h1>
        <h3><a href="https://project-express-api-7co7srd3ia-lz.a.run.app">API</a></h3>
        <h3>Books available <a href="https://project-express-api-7co7srd3ia-lz.a.run.app/book-titles">here</a></h3>
        <h3>Author List <a href="https://project-express-api-7co7srd3ia-lz.a.run.app/book-authors">here</a></h3>
        <h3>Books rated above 4  <a href="https://project-express-api-7co7srd3ia-lz.a.run.app/book-wellrated">here</a></h3>
      </InnerWrapper>
    </SearchWrapper>
  )
};

const SearchWrapper = styled.section`
background:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)); 
display: flex;
justify-content: center;
color:white;
line-height: 2.5rem;
padding:15px;
margin-top: 10px;
a {
    color: white;
    text-decoration: none;
    border-bottom: 1px solid white;
    transition: border-bottom 0.2s;
  }
  a:hover {
    border-bottom: 1px solid transparent;
  }
`
const InnerWrapper = styled.section`
border: 10px solid rgba(255, 255, 255, 0.3);
border-radius: 10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
width:60%;
h1{
  font-size: 2.5rem;
}
h3{
  font-size: 2rem;
}`

