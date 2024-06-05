import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/index.services";
import { AuthContext } from "../context/auth.context";
import AllComments from "../pages/AllComments";

function AddForm() {
  const navigate = useNavigate();
  const params= useParams("")

  const {loggedUserId, isLoggedIn}=useContext(AuthContext)
  const [comment, setComment] = useState("");
  


useEffect(()=>{

//getFeedBack()

},[])

const handleSubmit = async (e) => {
    e.preventDefault();

    const newcomment = {
      text: comment,
      user: loggedUserId,
      band:params.bandId
    };
    try {
      // const response=axios.post("http://localhost:5005/api/comment", newcomment )
      await service.post("/comment", newcomment);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };


 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Leave your Feedback:</label>
          <input
            type="text"
            name="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Comments:</h3>
        
         
       
      </div>  
      <AllComments bandId={params.bandId}/>
    </div>
  );
}

export default AddForm;
