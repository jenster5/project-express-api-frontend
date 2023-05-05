import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookCarousel: [],
  authorSearch: [],
  loading: false
}

export const bookstore = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    setBookCarousel: (store, action) => {
      store.BookCarousel = action.payload
    },
    setAuthorSearch: (store, action) => {
      store.authorSearch = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
});

export const startBookstore = () => {
  return (dispatch, getState) => {
    dispatch(bookstore.actions.setLoading(true))
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ booktitle: getState().bookstore.title })
    }
    fetch('https://project-express-api-7co7srd3ia-lz.a.run.app/book-titles', options)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        dispatch(bookstore.actions.setBookCarousel(json.body.title));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(bookstore.actions.setLoading(false)))
  };
};

export const AuthorSearch = () => {
  return (dispatch, getState) => {
    dispatch(bookstore.actions.setLoading(true))
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ booktitle: getState().bookstore.author })
    }
    fetch('https://project-express-api-7co7srd3ia-lz.a.run.app/book-authors', options)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        dispatch(bookstore.actions.setAuthorSearch(json.body.title));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(bookstore.actions.setLoading(false)))
  };
};