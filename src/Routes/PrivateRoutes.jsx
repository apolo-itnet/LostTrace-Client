import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import LoaderFull from "../Shared/Laoder/LoaderFull";

const PrivateRoutes = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if(loading) {
    return <LoaderFull/>
  }

  if (!user){
    return <Navigate to="/signin" state={location.pathname}></Navigate>
  }

  return children;



};

export default PrivateRoutes;
