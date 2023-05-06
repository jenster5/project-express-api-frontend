import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BookTitlesCarousel = () => {
  const [fetchedBooks, setFetchedBooks] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('https://project-express-api-7co7srd3ia-lz.a.run.app/book-titles', options)
      .then((response) => response.json())
      .then((json) => {
        setFetchedBooks(json.body.title)
        // dispatch(bookstore.actions.setAuthorSearch(json.author));
      })
      .catch((error) => console.log(error))
  })

  const responsiveBooks = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsiveBooks}>
      {fetchedBooks.map((bookTitle) => (
        <div className="Books-card" key={bookTitle}>
          {bookTitle}
        </div>
      ))}
    </Carousel>
  );
};

export default BookTitlesCarousel;
