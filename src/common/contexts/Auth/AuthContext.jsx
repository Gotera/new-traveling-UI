import { createContext, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

export const AuthContext = createContext(null);
AuthContext.displayName = "Login";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.userResult);
        }
      }
    };
    validateToken();
  }, [api]);
  
  const signin = async (email, password) => {
    const data = await api.signin(email, password);
    if (data.userResult && data.token) {
      console.log(data);
      setUser(data.userResult);
      setToken(data.token);
      alert(data.msg);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
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
