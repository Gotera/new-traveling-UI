/* eslint-disable jsx-a11y/label-has-associated-control */
import { Label, SideBarInput, SidebarBody, SidebarWrapper } from './Sidebar.style';
import { AiOutlineHistory } from 'react-icons/ai';
import { BsFillClipboardDataFill } from 'react-icons/bs';

function Sidebar() {
  return (
    <SidebarWrapper className="Sidebar__Wrapper">
      <SideBarInput type="checkbox" id="toggle" />
      <Label htmlFor="toggle">
        <span className="Bar" />
        <span className="Bar" />
        <span className="Bar" />
      </Label>
      <SidebarBody className="Sidebar">
        <ul>
          <li>Board</li>
          <li>
            <a href="/">
              <BsFillClipboardDataFill className="svg" />
              Home
            </a>
          </li>
          <li>
            <a href="/historico">
              <AiOutlineHistory className="svg" />
              Histórico
            </a>
          </li>
        </ul>
      </SidebarBody>
    </SidebarWrapper>
  );
}

export default Sidebar;