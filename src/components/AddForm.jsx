import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/index.services";
import { AuthContext } from "../context/auth.context";
import AllComments from "../pages/AllComments";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <Form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        <Form.Group style={{width:400, }}>
          <Form.Label><h1>Leave your Feedback :</h1>  </Form.Label>
          <Form.Control as="textarea" rows={3} type="text"
            name="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          /></Form.Group>
        </div>
        
        <Button variant="dark" type="submit">Submit</Button>
        </Form>
      <div>
       
        
         
       
      </div>  
      <AllComments bandId={params.bandId}/>
    </div>
  );
}

export default AddForm;
