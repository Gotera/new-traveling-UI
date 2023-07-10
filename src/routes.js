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

function AppRouter() {
  return (
    <Router>
      <Header />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/historico" element={<History />} />
          <Route path="/historico/:_id" element={<JorneyForm />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default AppRouter;
