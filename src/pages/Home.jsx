import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logouser from "/images/logouser.png"
function Home() {
const [randomBand, setRandomBand]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5005/api/band/random")
    .then((response)=>{
      console.log(response);
      setRandomBand(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  if(randomBand===null){
    return <h1>...loading</h1>
  }


  return (
    <div>
      <Link to={'/new-band'}>Upload Your Band</Link>
      <Link to={"/all-bands"}>All the Bands</Link>

       <div>
        <h1> Our Recomendation:</h1>
        <Link to={`/band-details/${randomBand._id}`}>{/*no me dirige ... revisar la llamada de allbanddetais*/}
        <h1>{randomBand.name}</h1>
        <h3>{randomBand.genre}</h3>
        <img 
        src={randomBand.profileImage} style={{width:250}}
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = logouser; 
          e.target.style.width = '250px'; 
          e.target.style.height = '250px'; 
        }} 
      />
        <p>{randomBand.country}</p>

        
        </Link>
       </div>
     
    </div>
  );
}


export default Home
