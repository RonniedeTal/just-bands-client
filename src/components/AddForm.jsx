import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/index.services";
import { AuthContext } from "../context/auth.context";
import AllComments from "../pages/AllComments";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//! se deberia llamada CommentSection
function AddForm() {
  const navigate = useNavigate();
  const params= useParams("")

  const {loggedUserId, isLoggedIn}=useContext(AuthContext)
  const [comment, setComment] = useState("");
  

  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    getComment();// redraw the actual comments running the page
   
  }, []);// 

  //useEffect componentDidMount to call the data just when the component is created for the first time

  const getComment = async () => {
    try {
      const response = await service.get(`/comment/by-bands/${params.bandId}`);
      console.log(response.data);
      
      setCommentList(response.data);
      console.log(commentList);
    } catch (error) {
      console.log(error)
     navigate("/error")
    }
};


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
      getComment()
      
    } catch (error) {
      console.log(error)
      navigate("/error");
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
      <AllComments commentList={commentList} getComment={getComment}/>
    </div>
  );
}

export default AddForm;
