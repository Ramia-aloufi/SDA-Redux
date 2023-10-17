import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter/counterSlice'
import booksReducer from './Book/BookSlice'



export const store = configureStore({
    reducer:{ 
        counter: counterReducer,
        booksR: booksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
