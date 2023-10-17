import { createSlice } from "@reduxjs/toolkit";



export interface BookType{
    id: number,
    title:string,
    author:string
  }
export interface BookInitialStateType{
     books: BookType[]
  }

  
const initialState:BookInitialStateType = {
    books:[
    {id:1, title:'thelord', author:'ram'},
    {id:2, title:'thelord', author:'ram'}
]}

const booksSlice = createSlice({
    name :'books',
    initialState:initialState,
    reducers:{
        addBook:(state,action) =>{
            state.books.push(action.payload)
            // console.log(action);  
        },
        deleteBook:(state,action) =>{
            const id = action.payload
            state.books = state.books.filter(book => book.id != id)
            console.log(action.payload);  
        },

    }
})


export const {addBook,deleteBook} = booksSlice.actions
export default booksSlice.reducer