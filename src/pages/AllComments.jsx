import React, { useContext, useState } from "react";
import service from "../services/index.services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../context/auth.context";

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
  <div>

{commentList&&commentList.map((eachComment, i)=>{
  console.log(eachComment);
    return(
        <div key={i}>
            <p>{eachComment.text}</p>
           {isLoggedIn&&loggedUserId==eachComment.user &&(
            <button onClick={(e)=>deleteComment(e, eachComment._id)}>Delete</button>)}
            
             </div>
    )
})}

  </div>);
}

export default AllComments;
