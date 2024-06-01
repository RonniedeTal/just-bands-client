import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function MyNavbar() {
const {authenticateUser, isLoggedIn}=useContext(AuthContext)
const navigate=useNavigate()

  const handleLogut=async()=>{
//we must remove the token from the localStorage
localStorage.removeItem("authToken")
//change states of the context

await authenticateUser()//this function is going to force the token and change the state
//take out the user to another page
navigate("/")
  }
  return (
    <div>
      
      {isLoggedIn===true &&<>
      <Link to={"/home"}><p>Home</p> </Link>
      <Link to={"/profile"}>Profile</Link>
      <br/>
      
      <br/>
      <Link onClick={handleLogut}>Log Out</Link></>}
    </div>
  )
}

export default MyNavbar
