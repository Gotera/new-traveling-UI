/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import History from "./pages/History";
import JorneyForm from "./components/MainContent";
import UserProvider from "./common/contexts/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route
              path="/historico"
              element={
                <RequireAuth>
                  <History />
                </RequireAuth>
              }
            />
            <Route path="/historico/:_id" element={<JorneyForm />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
