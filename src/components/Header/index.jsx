import { HeaderWrapper } from "./Header.style.jsx";
import { memo } from "react";
import Sidebar from "./components/SidebarMenu/index";

function Header() {
  return (
    <HeaderWrapper className="Header__Wrapper">
      <Sidebar />
    </HeaderWrapper>
  );
}

export default memo(Header);
