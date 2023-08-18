/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading} = useContext(AuthContext);
  const location = useLocation(); 
//   console.log("Private location :", location); 

  if (loading) {
      return <div>Loading....</div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{from : location}}  replace></Navigate>;
};

export default PrivateRoute;
