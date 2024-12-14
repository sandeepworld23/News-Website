import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import Footer from './Footer';

export default function App() {
  let [language, setLanguage] = useState("hi")

  function changeLanguage(input) {
    setLanguage(input)
  }

  return (
    <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/" element={<Home language={language} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


