import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import CategoryPage from './Pages/CategoryPage.jsx'
import SearchPage from './Pages/SearchPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/category/:section',
        element: <CategoryPage/>
      },
      {
        path: '/search',
        element: <SearchPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
