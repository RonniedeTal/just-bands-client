import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import logo from "/images/logo.png"
import Form from 'react-bootstrap/Form';

function Login() {
  const {authenticateUser}=useContext(AuthContext)
    const navigate=useNavigate()

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [errorMessage, setErrorMessage]=useState("");

    const handleEmailChange=(e)=>setEmail(e.target.value);
    const handlePasswordChange=(e)=>setPassword(e.target.value);

    const handleLogin=async(e)=>{
        e.preventDefault();

        // call backend to validation 
        const userCredentials={
            email:email,
            password:password
        }

        try {
            

            const response=await axios.post("http://localhost:5005/api/auth/login", userCredentials)
            console.log(response);

            //store the token in the localstore
            localStorage.setItem("authToken",response.data.authToken)
            //validating the actual token
           authenticateUser()    //----------me rompe el codigo

            navigate("/home")
        } catch (error) {
            console.log(error);
            if (error.response.status === 400){
                setErrorMessage(error.response.data.errormessage)
            }
            //navigation to an error page
            
            
        }

    }
  return (
    <Form onSubmit={handleLogin}>
      <img src={logo} alt="logo" style={{width:500}} className='moving'/>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        <Form.Group style={{width:400, }}>
        <Form.Label >Email Address:</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={handleEmailChange}/>
        </Form.Group>
</div>
<div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        <Form.Group style={{width:400}} >
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={handlePasswordChange} />
       </Form.Group>
</div>
        <button type="submit">Let's Rock!!!</button>

{errorMessage && <p>{errorMessage}</p>}
<br/>
<Link to={"/signup"}>Signup</Link>
<p>
<br/>
Attention rock enthusiasts! Welcome to an exclusive page dedicated to lovers of rock and its various subgenres. Here, amateur bands have the opportunity to showcase their material and connect with other passionate rock fans. Whether you're into classic rock, punk, metal, or any other form of rock, this is your community.

This platform is designed for those who live and breathe rock music. It's a place to discover new bands, share your own music, and engage with fellow rock fans. From the raw energy of garage rock to the intricate melodies of progressive rock, we celebrate it all.

However, if pop music is your preference, this may not be the place for you. Our focus is on fostering a community centered around the rock genre, allowing its unique sounds and culture to thrive. Join us and be part of a vibrant network that supports and promotes rock music in all its forms.</p>
      </Form>
      
  )
}

export default Login
