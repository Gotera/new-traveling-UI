import { createContext, useState } from "react";
import { useApi } from "../../hooks/useApi";

export const AuthContext = createContext(null);
AuthContext.displayName = "Login";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  const signin = async (email, password) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ signin, signout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
