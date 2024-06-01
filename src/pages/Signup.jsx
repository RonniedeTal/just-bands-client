import axios from "axios";
import { useState } from "react";
import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import cat from "../../public/images/cat.gif"


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
      <img src={cat} alt="kitten" style={{width:200}}/>
      <form onSubmit={handleSignup}>
        <label>Email Address:</label>
        <input type="email" name="email" value={email} onChange={handleEmailChange}/>
        <br/>
        <label >Username:</label>
        <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
        <br/>
        <label >Password:</label>
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        <br/>
        <button type="submit">Let's do it</button>

        {errorMessage && <p>{errorMessage}</p>}
        <br/>
        
      </form>
    </div>
  )
}

export default Signup
