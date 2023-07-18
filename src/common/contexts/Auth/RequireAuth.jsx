import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate()
  if (!auth.user) {
    console.log("executou")
    // console.log(auth.userResult)
    navigate("/login")
  }

  return children;
};
