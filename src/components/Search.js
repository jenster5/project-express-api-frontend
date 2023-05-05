/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookstore } from '../reducers/Bookstore'

export const SearchFunction = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const selectAuthors = useSelector((store) => store.bookstore.setAuthorSearch)

  const bookSearchInput = (e) => {
    e.preventDefault();
    dispatch(bookstore.actions.setAuthorSearch(input))
    setInput('')
  }
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

  const selectAuthor = (event) => {
    dispatch(bookstore.actions.setFetchedAuthors(event.target.value))
  }

  return (
    <main>
      {selectAuthors &&
       <section className="container">
         <header>
           <h1>Welcome to Bargain Books </h1>
           <p>Check out our stock of books for low prices </p>
         </header>

         <section className="filter">
           <div className="inputWrapper">
             <form onSubmit={bookSearchInput}>
               <label>Search for Titles</label>
               <input
                 id="bookSearchInput"
                 required
                 type="text"
                 placeholder="Search for your favorite book here"
                 value={input}
                 onChange={(event) => setInput(event.target.value)} />
               <button type="submit" onClick={bookSearchInput}>Search</button>
             </form>
           </div>

           <div className="selectWrapper">
             <label>Or Search for Authors</label>
             <select value="author" name="authors" id="authorList" onChange={selectAuthor} aria-label="authorList">
               <option defaultValue>Choose authors</option>
               {fetchedAuthors.map((item) => {
                 return (
                   <option
                     key={item.bookID}
                     value={item.authors}>
                     {item.authors.replace('-', ', ')}
                   </option>
                 )
               })}
             </select>
           </div>

         </section>
       </section>}
    </main>
  )
}
