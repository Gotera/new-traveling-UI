/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterTravel from "./pages/RegisterTravel";
import Header from "./components/Header";
import History from "./pages/History";
import JorneyForm from "./components/RegisterTravelForm";
import UserProvider from "./common/contexts/User";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/RegisterUser";
import { RequireAuth } from "./common/contexts/Auth/RequireAuth";
import { AuthProvider } from "./common/contexts/Auth/AuthContext";

function AppRouter() {
  return (
    <Router>
      <Header />
      <AuthProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createTravel" element={<RegisterTravel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/historico/:_id" element={<JorneyForm />} />
            <Route
              path="/historico"
              element={
                <RequireAuth>
                  <History />
                </RequireAuth>
              }
            />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
