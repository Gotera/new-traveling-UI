import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    console.log("executou")
    Navigate("/login")
  }

  return children;
};
