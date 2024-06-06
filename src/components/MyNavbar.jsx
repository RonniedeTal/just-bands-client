import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "/images/logo.png"

function MyNavbar() {
const {authenticateUser, isLoggedIn, loggedUserId}=useContext(AuthContext)
const navigate=useNavigate()

  const handleLogout=async()=>{
//we must remove the token from the localStorage
localStorage.removeItem("authToken")
//change states of the context

await authenticateUser()//this function is going to force the token and change the state
//take out the user to another page
navigate("/")
  }
  return (
    <>
    {isLoggedIn && (
            <>
    <Navbar  className= "au" bg="black" variant="dark">
      <Container>
        <Navbar.Brand ><img src={logo}style={{width:200}}/></Navbar.Brand>
        <h1 className='moving'>Welcome to Hell!!!</h1>
        <Nav className='navborder'>
          
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to={`/profile/${loggedUserId}`}>Profile</Nav.Link>
              
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
           
        </Nav>
      </Container>
    </Navbar>
     </>
          )}
  </>
);
};

export default MyNavbar
