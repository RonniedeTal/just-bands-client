import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AllBandsDetails() {
    const params= useParams()
console.log(params);
    //create an state to store the external data
    const [details, setDetails]=useState(null)


    //useEffect componentDidMount to call the data just when the component is created for the first time
    useEffect(()=>{
       axios.get(`http://localhost:5005/api/band/band-details/${params.bandId}`)
       .then((response)=>{
        console.log(response);
       }).catch((error)=>{
        console.log(error); 
       })
    },[])

    //calling the API



  return (
    <div>
      <h1>details of a band</h1>
    </div>
  )
}

export default AllBandsDetails
