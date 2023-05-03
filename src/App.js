import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { bookstore } from './reducers/Bookstore'
import WelcomeScreen from './components/WelcomeScreen'

export const App = () => {
  const reducer = combineReducers({
    bookstore: bookstore.reducer
  });
  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <WelcomeScreen />
    </Provider>
  )
}
