import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// components import
import Header from './components/Header'
import Home from './components/Home'
// styles import 
import './styles/App.scss'
import "./styles/header.scss"
import "./styles/home.scss"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App