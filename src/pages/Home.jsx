import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <p>{randomBand.name}</p>
        <p>{randomBand.genre}</p>
        {/*add image,  country*/ }
        </Link>
       </div>
     
    </div>
  );
}


export default Home
