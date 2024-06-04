import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/index.services";

function AddForm() {
  const navigate = useNavigate();
  const params= useParams("")

  const [comment, setComment] = useState("");
    const [feedback, setFeedBack]=useState([])


useEffect(()=>{

getFeedBack()

},[])

const handleSubmit = async (e) => {
    e.preventDefault();

    const newcomment = {
      text: comment,
      //user,
    };
    try {
      // const response=axios.post("http://localhost:5005/api/comment", newcomment )
      const response = await service.post("/comment", newcomment);
      navigate(`/band-details/${params.bandId}`);
    } catch (error) {
      console.log(error);
    }
  };

const getFeedBack=async()=>{
    try {
        const response=await service.get(`/comment/${params._id}`)
        console.log(response);
    setFeedBack(response.data)
    } catch (error) {
        console.log(error);
    }
    
} 
if (feedback === null) {
    return <div className="loader"></div>;
  }
 
 
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
        <ul>
          {feedback.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddForm;
