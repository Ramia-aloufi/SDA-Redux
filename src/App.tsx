
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Book from './Book/Book'
import AddBook from './Book/AddBook'
import Counter from './Counter/Counter'
import Home from './Home'

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
  ])

  return (
<RouterProvider router={router} />
  )
}

export default App
