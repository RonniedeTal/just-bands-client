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
       /*axios.get(`http://localhost:5005/api/band/${params.bandId}`)
       .then((response)=>{
        console.log(response);
       }).catch((error)=>{
        console.log(error); 
       })*/
       getData()
    },[])

    const getData=async()=>{
try {
    const response= await axios.get(`http://localhost:5005/api/band/${params.bandId}`)
console.log(response);
setDetails(response.data)
} catch (error) {
    console.log();
}
    }
    //calling the API
    if(details===null){
        return <h1>...loading</h1>
      }
    


  return (
    <div>
      <h1>details of a band</h1>
{details.name}
    </div>
  )
}

export default AllBandsDetails
