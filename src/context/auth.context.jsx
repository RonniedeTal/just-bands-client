import axios from "axios";
import { createContext, useEffect, useState } from "react";
import service from "../services/index.services";

//component who shares the context
const AuthContext = createContext();
//wrap component
function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const authenticateUser = async () => {
    //calls verify , and validate the token updating the states
    const authToken = localStorage.getItem("authToken");
    //return when the token doesn't exist
    if (!authToken) {
      setIsLoggedIn(false);
      setLoggedUserId(null);
      setIsAuthenticating(false);
      return; //ends the function and doesn't make the call
    }

    try {
      //const response =await axios.get("http://localhost:5005/api/auth/verify", {headers:{Authorization:`Bearer ${authToken}`}})
      const response = await service.get("/auth/verify", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      console.log(response);
      //token is valid
      setIsLoggedIn(true);
      setLoggedUserId(response.data.payload._id);
      setIsAuthenticating(false);
    } catch (error) {
      console.log(error);
      //token isn't valid
      setIsLoggedIn(false);
      setLoggedUserId(null);
      setIsAuthenticating(false);
    }
  };

  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser,
  };

  useEffect(() => {
    authenticateUser();
  }, []);
  if (isAuthenticating === true) {
    return <div className="loader"></div>;
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthWrapper };
