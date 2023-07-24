import { useContext } from "react";
import { AuthContext } from "common/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "pages/Login";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if ((auth.user = null)) {
    console.log("executou");
    // console.log(auth.userResult)
    // navigate("/login");
    return <Login/>
  }

  return children;
};
