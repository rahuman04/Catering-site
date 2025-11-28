import React from 'react'
import About from './Pages/About' 
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/About' element={<About />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
