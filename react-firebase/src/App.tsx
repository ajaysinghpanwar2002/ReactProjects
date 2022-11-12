import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//pages
import Login from './pages/Login';
import Main from './pages/main/Main';
import CreatePost from './pages/create-post/CreatePost';
//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App