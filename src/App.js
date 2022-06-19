import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/layouts/Header'
import Home from './routes/Home'
import Detail from './routes/Detail'

import './scss/main.scss'

const App = () => {
  const [darkMode, setDarkMode] = useState(window.localStorage.getItem('mode') || false)

  const changeMode = () => {
    setDarkMode(!darkMode)
    window.localStorage.setItem('mode', darkMode)
  }

  return (
    <>
      <BrowserRouter>
        <Header darkMode={darkMode} changeMode={changeMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          {/*<Route path="/:country" element={<Detail darkMode={darkMode} />} />*/}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
