import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../services/index.services'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
function Profile() {
  const [userProfile, setUserProfile]=useState([])
  const navigate=useNavigate()
  const params=useParams()

  useEffect(()=>{
getUserProfile()
  },[])

  const getUserProfile=async()=>{
   
    try {
      const response=await service.get(`/user/${params.userId}`)
      console.log(response);
      setUserProfile(response.data)
      console.log(userProfile);
    } catch (error) {
      navigate("/error")
    }
  }
  
  if(userProfile===null){
    return <div className="loader"></div>
  }
  return (
    <div> 
      <h1>Welcome :</h1>
       <h3>{userProfile.username}</h3>
       <h1>All Your Favorites Bands Here:</h1>
       <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
       <Card border="dark" style={{ width: '18rem', backgroundColor:"black"}}>
      {userProfile.favorite&&userProfile.favorite.map((eachFavorite)=>{
        return  <Link to={`/band-details/${eachFavorite._id}`}key={eachFavorite._id}><h3>{eachFavorite.name}</h3></Link>
      
        
        
      })}
    
      
    </Card>
    </div>
    </div>
  )
}

export default Profile
