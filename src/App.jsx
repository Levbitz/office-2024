import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Pass from './pages/Pass'

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/auth_cdn/:id" element={<Pass/>}/>
</Routes></BrowserRouter>
  )
}

export default App
