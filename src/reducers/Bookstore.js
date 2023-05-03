import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookSearch: '',
  authorSearch: []
}

export const bookstore = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    setBookSearch: (store, action) => {
      store.bookSearch = action.payload
    },
    setAuthorSearch: (store, action) => {
      store.authorSearch = action.payload
    }
  }
})