/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookstore } from '../reducers/Bookstore'
import { AuthorSearch } from './AuthorSearch'
import { TitleSearch } from './TitleSearch'

export const SearchFunction = () => {
  const [books] = useState([])
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const authors = useSelector((store) => store.bookstore.authorSelect)
  const bookSearchResult = useSelector((store) => store.bookstore.bookSearch)

  const bookSearchInput = (e) => {
    e.preventDefault();
    dispatch(bookstore.actions.setBookSearch(input))
    setInput('')
  }

  const selectAuthor = (event) => {
    dispatch(bookstore.actions.setAuthorSelect(event.target.value))
  }

  return (
    <main>
      {books &&
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
               {books.map((item) => {
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

         {authors.length > 1 ? <AuthorSearch /> : ''}
         {bookSearchResult.length > 1 ? <TitleSearch /> : ''}
       </section>}
    </main>
  )
}
