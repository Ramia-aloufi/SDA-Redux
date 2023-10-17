import { ChangeEvent, FormEvent, useState } from "react"
import { addBook } from "./BookSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const AddBook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)

    }
    const onChangeAuthoreHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setAuthor(e.target.value)

    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // console.log(e);
        const newBook = {id:Date.now() ,title:title ,author:author}
        dispatch(addBook(newBook))
        navigate('/books')
        
        

    }

  return (
    <>
    <h2>AddBook</h2>
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        name="title"
        placeholder="title"
        value={title}
        onChange={onChangeTitleHandler}

        />
                <input 
        type="text" 
        name="authore"
        placeholder="author"
        value={author}
        onChange={onChangeAuthoreHandler}

        />
        <input type="submit" value="add Book" />
    </form>
    </>
    
  )
}

export default AddBook