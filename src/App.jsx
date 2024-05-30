import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import MyNavbar from './components/MyNavbar'
import Profile from './pages/Profile'
import OnlyPrivate from './components/OnlyPrivate'
function App() {
  

  return (
    <div>
        <MyNavbar />
    <Routes>
      
      <Route path='/' element={<Login />}/>
       <Route path='/home' element={<Home />}/>
       <Route path='/signup' element={<Signup />}/>
       <Route path="/profile"element={<OnlyPrivate><Profile /></OnlyPrivate>}/>
       </Routes>
   </div>
  )
}

export default App
