import axios from "axios";
import { useState } from "react";
import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import cat from "../../public/images/cat.gif"
import Form from 'react-bootstrap/Form';
import logo from "/images/logo.png"
import Button from 'react-bootstrap/Button';


function Signup() {

    const navigate=useNavigate()

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [username, setUsername]=useState("");
    const [errorMessage, setErrorMessage]=useState("");

    const handleEmailChange=(e)=>setEmail(e.target.value);
    const handlePasswordChange=(e)=>setPassword(e.target.value)
    const handleUsernameChange=(e)=>setUsername(e.target.value)

    const handleSignup=async(e)=>{
        e.preventDefault();

        const newUser={
            email:email,
            password:password,
            username:username
        }

        try {

                await axios.post("http://localhost:5005/api/auth/signup", newUser)
               
            navigate("/")
            
        } catch (error) {
            if (error.response.status === 400){
                setErrorMessage(error.response.data.errormessage)
            }
            //navigation to an error page
            console.log(error);
            
        }
    }
  return (
    <div>
      <h1>Sign Up or Die</h1>
      <h3>We have kittens!!!</h3>
      <img src={logo} alt="logo" style={{width:500}} className='moving'/>
      <Form onSubmit={handleSignup}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
      <Form.Group style={{width:400, }}>
        <Form.Label >Email Address:</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={handleEmailChange}/>
        </Form.Group>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        <Form.Group style={{width:400, }}>
        <Form.Label >Username:</Form.Label>
        <Form.Control type="text" name="username" value={username} onChange={handleUsernameChange}/>
        </Form.Group>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>

        <Form.Group style={{width:400, }}>
        <Form.Label >Password:</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={handlePasswordChange} />
        </Form.Group>
        </div>
        <Button variant="dark" type="submit">Let's do it!!!</Button>
        
        {errorMessage && <p>{errorMessage}</p>}
        <br/>
        
      </Form>
    </div>
  )
}

export default Signup
