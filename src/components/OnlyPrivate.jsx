import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

//just for support... actually is not necessary
function OnlyPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn === true) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}

export default OnlyPrivate;
