import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logouser from "/images/logouser.png"
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import AllComments from "../pages/AllComments";

function AllBandsDetails() {
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
      const response = await axios.get(
        `http://localhost:5005/api/band/${params.bandId}`
      );
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

  return (
    <div>
      <h1>{bandDetails.name}</h1>

      <h3>{bandDetails.genre}</h3>
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
      <p>{bandDetails.description}</p>

        
      <Link to={`/edit-band/${bandDetails._id}`}>
         {isLoggedIn&&loggedUserId==owner._id && (
            <button>Update Band</button>)}
        {/* <button>Update Band</button>*/}
        </Link>
        <h3>Comments:</h3>
      <AddForm/>
    </div>


  );


}

export default AllBandsDetails;
