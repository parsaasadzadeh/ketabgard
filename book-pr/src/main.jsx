import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import App from './App.jsx'
import Layout from './components/Layout.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Books from './components/Book/Books.jsx'
import Book from './components/Book/Book.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Questions from './components/pages/Questions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Questions' element={<Questions />} />
          <Route path='Books' element={<Books />} />
          <Route path='Books/:bookId' element={<Book />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
