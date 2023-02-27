import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = true;
  const location = useLocation();

  if (!isAuth) {
    return <Navigate state={location.pathname} to={"/login"} replace />;
  }
  return children;
};