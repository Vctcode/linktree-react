import React from 'react'
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/home'
import Contact from './routes/contact'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <Contact />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)
