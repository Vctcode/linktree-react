import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './routes/Home'
import Contact from './routes/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact'element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
