import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../Store"
import { deleteBook } from './BookSlice'



const Book = () => {


     const books = useSelector((state:RootState) => state.booksR.books)
    const dispatch = useDispatch()
    const handleDeleteBook = (id:number)=>{
      dispatch(deleteBook(id))
      
    }

  return (
    <>
     <h2>Book</h2>
     <table>
      <thead>
        <tr>
          <td>ID{}</td>
          <td>TITLE</td>
          <td>AUTHOR</td>
          <td>ACTIONS</td>
        </tr>
      </thead>

      <tbody>
        {books.map((book) =>{
         return <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td><button onClick={()=>handleDeleteBook(book.id)}> delete</button></td>
          </tr>
        })}
      </tbody>
     </table>
    </>
   
  )
}

export default Book
