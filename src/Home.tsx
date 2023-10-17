import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <button><Link to={"/counter"}>counter</Link></button> 
    <button> <Link to={"/books"}>books</Link></button> 
   <button><Link to={"/addbook"}>AddBook</Link></button> 
    
    </>
  )
}

export default Home