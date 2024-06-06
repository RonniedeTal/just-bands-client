import React, { useContext, useState } from "react";
import service from "../services/index.services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AllComments(props) {
  const navigate = useNavigate();

  const { isLoggedIn, loggedUserId } = useContext(AuthContext);

  const deleteComment = async (e, id) => {
    e.preventDefault();
    try {
      await service.delete(`/comment/${id}`);

      props.getComment();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {props.commentList &&
        props.commentList.map((eachComment, i) => {
          console.log(eachComment);
          return (
            <div key={i}>
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Body>
                  {" "}
                  <Card.Text>{eachComment.text}</Card.Text>{" "}
                </Card.Body>
                <Card.Header>
                  {" "}
                  {isLoggedIn && loggedUserId == eachComment.user && (
                    <Button
                      variant="dark"
                      onClick={(e) => deleteComment(e, eachComment._id)}
                    >
                      Delete
                    </Button>
                  )}
                </Card.Header>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default AllComments;
