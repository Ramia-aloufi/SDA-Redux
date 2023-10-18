import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { AppDispatch } from "../Store"
import { updateBook } from "./BookSlice"


const EditBook = () => {
    const {state} = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    console.log(location);
    console.log("EditBook");
    

    const id = state.id
    const [title,setTitle] = useState(state.title) 
    const [author,setAuthor] = useState(state.author)

    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)

    }
    const onChangeAuthoreHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setAuthor(e.target.value)

    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const updatedBook = {id:id ,title:title ,author:author}
        dispatch(updateBook(updatedBook))
        navigate('/books')
        
        

    }

  return (
    
    <>
    <h2>Edit Book</h2>
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
        <input type="submit" value="Edit Book" />
    </form>
    </>
    
  )
}

export default EditBook