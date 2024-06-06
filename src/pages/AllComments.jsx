import React, { useContext, useState } from "react";
import service from "../services/index.services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AllComments(props) {
  const navigate=useNavigate()
  const [commentList, setCommentList] = useState([]);
  const {authenticateUser, isLoggedIn, loggedUserId}=useContext(AuthContext)
  const [owner, setOwner]=useState("")

  useEffect(() => {
    getComment();// redraw the actual comments running the page
   
  }, []);// 

  //useEffect componentDidMount to call the data just when the component is created for the first time

  const getComment = async () => {
    try {
      const response = await service.get(`/comment/by-bands/${props.bandId}`);
      console.log(response.data);
      
      setCommentList(response.data);
      setOwner(response.data.owner)
      console.log(commentList);
    } catch (error) {
     navigate("/error")
    }
};
    // aque el delete comments
  const deleteComment=async(e,id)=>{
    e.preventDefault()
      try {
        await authenticateUser()
        const response=await service.delete(`/comment/${id}`)
       // console.log(response);
        getComment()
      } catch (error) {
       navigate("/error")
      }
  }

  
  return (
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

{commentList&&commentList.map((eachComment, i)=>{
  console.log(eachComment);
    return(
        <div key={i}>
          <Card border="primary" style={{ width: '18rem' }}>

           <Card.Body>   <Card.Text>{eachComment.text}</Card.Text> </Card.Body>
        <Card.Header>     {isLoggedIn&&loggedUserId==eachComment.user &&(
          
         <Button variant="dark" onClick={(e)=>deleteComment(e, eachComment._id)}>Delete</Button>  )}</Card.Header>   
             
           </Card>  
             </div>
    )
})}

  </div>);
}

export default AllComments;
