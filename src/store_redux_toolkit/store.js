import { configureStore } from '@reduxjs/toolkit'
import book_slice from './reducers/search_book_silce'

export const store = configureStore({
  reducer: {
    books: book_slice,
  },
})
