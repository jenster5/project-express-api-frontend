import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const BookTitlesCarousel = ({ bookTitles }) => {
  const responsiveBooks = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <BooksWrapper>
      <Carousel responsive={responsiveBooks}>
        {bookTitles.map((bookTitle) => (
          <div className="Books-card" key={bookTitle}>
            {bookTitle}
          </div>
        ))}
      </Carousel>
    </BooksWrapper>
  );
};

export default BookTitlesCarousel;

const BooksWrapper = styled.section`
height: 100vh;
width:100vw;
`
