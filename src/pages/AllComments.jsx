import React, { useState } from "react";
import service from "../services/index.services";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function AllComments(props) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComment();
  }, []);

  //useEffect componentDidMount to call the data just when the component is created for the first time

  const getComment = async () => {
    try {
      const response = await service.get(`/comment/by-bands/${props.bandId}`);
      console.log(response.data);
      
      setCommentList(response.data);
      console.log(commentList);
    } catch (error) {
      Navigate("/error");
    }

    // aque el delete comments
  };
  return (
  <div>

{commentList&&commentList.map((eachCommentList, i)=>{
    return(
        <div key={i}>
            <p>{eachCommentList.text}</p>

             </div>
    )
})}

  </div>);
}

export default AllComments;
