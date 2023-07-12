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
      {console.log(auth)}
      <label>{auth?.data.email && <a href="/">Sair</a>}</label>
      <label>{auth?.data?.email}</label>
    </HeaderWrapper>
  );
}

export default memo(Header);
