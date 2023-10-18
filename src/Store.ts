import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter/counterSlice'
import booksReducer from './Book/BookSlice'
import CompanySlice from "./Company/CompanySlice";



export const store = configureStore({
    reducer:{ 
        counter: counterReducer,
        booksR: booksReducer,
        companyR: CompanySlice 
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
