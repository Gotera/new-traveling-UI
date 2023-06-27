import { memo } from "react";
import Sidebar from "./components/SidebarMenu/index";
import { HeaderWrapper } from "./Header.style.jsx";

function Header() {
  return (
    <HeaderWrapper>
      <Sidebar />
    </HeaderWrapper>
  );
}

export default memo(Header);
