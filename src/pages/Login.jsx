import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';


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
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>Email Address:</label>
        <input type="email" name="email" value={email} onChange={handleEmailChange}/>
        <br/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        <br/>
        <button type="submit">Let's Rock!!!</button>

{errorMessage && <p>{errorMessage}</p>}
<br/>
<Link to={"/signup"}>Signup</Link>
      </form>
    </div>
  )
}

export default Login
