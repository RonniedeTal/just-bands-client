
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logouser from "/images/logouser.png"
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import AllComments from "../pages/AllComments";
import service from "../services/index.services";
import Button from 'react-bootstrap/Button';

function AllBandsDetails() {
  const navigate=useNavigate()
  const params = useParams();
  const {loggedUserId, isLoggedIn}=useContext(AuthContext)

  const[owner, setOwner]=useState("")

  console.log(params);
  //create an state to store the external data
  const [bandDetails, setBandDetails] = useState(null);
  


 useEffect(() => {
    getData();
  }, []);

 
  //useEffect componentDidMount to call the data just when the component is created for the first time
 

  const getData = async () => {
    try {
      const response = await service.get(`/band/${params.bandId}` );
        
     
      console.log(response);
      setBandDetails(response.data);
      setOwner(response.data.owner)
    } catch (error) {
      console.log(error);
    }
  };
  //calling the API
  if (bandDetails === null) {
    return <div className="loader"></div>;
  }

  const handleFavorite=async()=>{
    try {
      const response=await service.patch(`/user/${params.bandId}/favorite`)
      console.log(response.data);
    } catch (error) {
      navigate("/error")
    }
  }

  return (
    <div>
      <h1 >This Is:</h1>
      <br/>
      <h1>{bandDetails.name}</h1>

      
      <h6>{bandDetails.country}</h6>
      <img 
        src={bandDetails.profileImage} 
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = logouser; 
          e.target.style.width = '150px'; 
          e.target.style.height = '150px'; 
        }} 
      />
      <h2>Genres:</h2>
      <h3>{bandDetails.genre}</h3>
      <h2>About The Band :</h2>
      <p>{bandDetails.description}</p>

        
      <Link to={`/edit-band/${bandDetails._id}`}>
         {isLoggedIn&&loggedUserId==owner._id && (
             <Button variant="dark">Update your Band</Button>)}
         </Link>
       
        <Button variant="dark" onClick={handleFavorite}>Add to Favorites</Button>
      <AddForm/>
    </div>


  );


}

export default AllBandsDetails;
