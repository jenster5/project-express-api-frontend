import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const BookTitlesCarousel = () => {
  const [bookTitles, setBookTitles] = useState([]);

  useEffect(() => {
    fetch('/book-titles')
      .then((response) => response.json())
      .then((data) => {
        setBookTitles(data.body)
      })
      .catch((error) => console.log(error));
  }, []);

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
        {bookTitles.map((title, book) => (
          <div className="Books-card" key={book.bookID}>
            {title}
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
