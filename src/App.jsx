import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page
import Portfolio from './Portfolio';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
