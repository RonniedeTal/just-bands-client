import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import MyNavbar from './components/MyNavbar'
import Profile from './pages/Profile'
import OnlyPrivate from './components/OnlyPrivate'
import CreateABand from './pages/CreateABand'
import NotFound from './pages/NotFound'
import AllBands from './pages/AllBands'
import AllBandsDetails from './pages/AllBandsDetails'
function App() {
  

  return (
    <div>
        <MyNavbar />
    <Routes>
      
      <Route path='/' element={<Login />}/>
       <Route path='/home' element={<Home />}/>
       <Route path='/signup' element={<Signup />}/>
       <Route path="/profile"element={<OnlyPrivate><Profile /></OnlyPrivate>}/>
       <Route path='/new-band' element={<CreateABand />}/>
       <Route path='/all-bands'element={<AllBands />}/>
       
       <Route path='/band-details/:bandId'element={<AllBandsDetails/>}/>
       <Route path='/not-found'element={<NotFound />}/>
       </Routes>
   </div>
  )
}

export default App
//<Route path=''element={}/>