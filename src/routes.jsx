/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from "common/contexts/Auth/RequireAuth";
import { AuthProvider } from "common/contexts/Auth/AuthContext";
import UserProvider from "common/contexts/User";
import Header from "components/Header";
import Footer from "components/Footer";
import RegisterTravel from "pages/RegisterTravel";
import HistoryById from "pages/HistoryById";
import Register from "pages/RegisterUser";
import History from "pages/History";
import Login from "pages/Login";
import Home from "pages/Home";

function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createTravel" element={<RegisterTravel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/historico/:_id" element={<HistoryById />} />
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
      <Footer />
    </Router>
  );
}

export default AppRouter;
