import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Web/Portfolio';



// Page
import LandingPage from './Landing_Page';

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
