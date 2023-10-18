
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Book from './Book/Book'
import AddBook from './Book/AddBook'
import Counter from './Counter/Counter'
import Home from './Home'
import Company from './Company/Company'
import EditBook from './Book/EditBook'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: ( <Home/>),
    },
    {
      path: "/counter",
      element: ( <Counter/>),
    },
    {
      path: "/books",
      element: ( <Book/>),
    },
    {
      path: "/addbook",
      element: (<AddBook/>),
    },
    {
      path: "/editbook",
      element: (<EditBook/>),
    },
    {
    path: "/companies",
    element: (<Company/>),
  }
  ])

  return (
<RouterProvider router={router} />
  )
}

export default App
