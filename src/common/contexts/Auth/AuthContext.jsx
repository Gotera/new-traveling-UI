import { createContext, useEffect, useState } from "react";
import { useApi } from "common/hooks/useApi";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null);
AuthContext.displayName = "Login";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    const validateToken = async (res) => {
      const data = await api.validateToken();
      console.log(user);
      if (data.user) {
        setUser(data.user);
        setToken(data.token);
      }
    };
    validateToken();
  }, [location.pathname]);

  const signin = async (email, password) => {
    const data = await api.signin(email, password);
    if (data.userResult && data.token) {
      setUser(data.userResult);
      setToken(data.token);
      alert(data.msg);
      console.log(data);
      return true;
    }
    return false;
  };

  const signout = async () => {
    setUser(null);
    setToken("");
    await api.logout();
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  return (
    <AuthContext.Provider value={{ signin, signout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
