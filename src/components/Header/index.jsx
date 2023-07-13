import { memo, useContext } from "react";
import Sidebar from "./components/SidebarMenu/index";
import { HeaderWrapper } from "./Header.style.jsx";
import { AuthContext } from "../../common/contexts/Auth/AuthContext";

function Header() {
  const auth = useContext(AuthContext);
  return (
    <HeaderWrapper>
      <Sidebar />
      <label>Header</label>
    </HeaderWrapper>
  );
}

export default Header;
