import { memo, useContext } from "react";
import Sidebar from "components/Header/components/SidebarMenu/";
import { HeaderWrapper } from "components/Header/Header.style.jsx";
import { AuthContext } from "common/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  };
  console.log(auth);
  return (
    <HeaderWrapper>
      <Sidebar />
      <label>Header</label>
      <label>
        {auth?.user && (
          <a href="/" onClick={handleLogout}>
            Sair
          </a>
        )}
      </label>
      {auth?.user && <label>Olá {auth.user?.name}</label>}
    </HeaderWrapper>
  );
}

export default Header;
