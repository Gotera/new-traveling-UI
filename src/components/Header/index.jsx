import './Header.css';
import { memo } from 'react';
import Sidebar from './components/SidebarMenu/index';

function Header() {
  return (
    <div className="Header__Wrapper">
      <Sidebar />
    </div>
  );
}

export default memo(Header);
