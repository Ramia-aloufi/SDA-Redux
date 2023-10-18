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
    {id:1, title:'The lord', author:'ramia'},
    {id:2, title:'The lord', author:'ramia2'}
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
        updateBook:(state,action) =>{
            const {id}  = action.payload as BookType
            const bookExist = state.books.find(book => book.id == id) as BookType
            if(bookExist){
                bookExist.title = action.payload.title;
                bookExist.author = action.payload.author
            }
        }

    }
})


export const {addBook,deleteBook,updateBook} = booksSlice.actions
export default booksSlice.reducer