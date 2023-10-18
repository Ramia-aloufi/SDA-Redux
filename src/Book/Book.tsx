import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../Store"
import { deleteBook } from './BookSlice'
import { Link } from 'react-router-dom'



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
          const {id,title,author} = book
         return <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>
              <Link to={"/editbook"} state={{id,title,author}}><button>Edit</button></Link>
              <button onClick={()=>handleDeleteBook(book.id)}> delete</button>
              </td>
          </tr>
        })}
      </tbody>
     </table>
    </>
   
  )
}

export default Book
