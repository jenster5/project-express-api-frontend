/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { bookstore } from '../reducers/Bookstore'

export const SearchFunction = () => {
  const [input, setInput] = useState('');
  // const [AuthorsSearch, setAuthorsSearch] = useState('');
  const dispatch = useDispatch();
  const authorsSearch = useSelector((store) => store.bookstore.authorsSearch);

  const bookSearchInput = (e) => {
    e.preventDefault();
    dispatch(bookstore.actions.setAuthorsSearch(input))
    setInput('')
  };

  const [fetchedAuthors, setFetchedAuthors] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('https://project-express-api-7co7srd3ia-lz.a.run.app/book-authors', options)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        setFetchedAuthors(json.body.authors)
      })
      .catch((error) => console.log(error))
  })

  const handleAuthorSelect = (event) => {
    dispatch(bookstore.actions.setAuthorsSearch(event.target.value))
  };

  return (
    <SearchWrapper>
      {authorsSearch &&
       <section className="container">
         <header>
           <h1>Welcome to Bargain Books </h1>
           <p>Check out our stock of books for low prices </p>
         </header>

         <section className="filter">
           <InputWrapper>
             <form onSubmit={bookSearchInput}>
               <label>Search for Titles</label>
               <input
                 id="bookSearchInput"
                 required
                 type="text"
                 placeholder="Search for your favorite book here"
                 value={input}
                 onChange={(event) => setInput(event.target.value)} />
               <button type="submit">Search</button>
             </form>
           </InputWrapper>

           <div className="selectWrapper">
             <label>Or Search for Authors</label>
             <select value={authorsSearch} name="authors" id="authorsList" onChange={handleAuthorSelect} aria-label="authorsList">
               <option defaultValue>Choose authors</option>
               {fetchedAuthors.map((item) => (
                 item.authors ? (
                   <option
                     key={item.bookID}
                     value={item.authors}>
                     {item.authors.replace('-', ', ')}
                   </option>
                 ) : null
               ))}
             </select>
           </div>

         </section>
       </section>}
    </SearchWrapper>
  )
};

const SearchWrapper = styled.section`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;

`

const InputWrapper = styled.section`
width:100%;
`

