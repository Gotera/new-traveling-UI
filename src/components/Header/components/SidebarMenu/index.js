/* eslint-disable jsx-a11y/label-has-associated-control */
import './Sidebar.css';
import { AiOutlineHistory } from 'react-icons/ai';
import { BsFillClipboardDataFill } from 'react-icons/bs';

function Sidebar() {
  return (
    <div className="Sidebar__Wrapper">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <span className="Bar" />
        <span className="Bar" />
        <span className="Bar" />
      </label>
      <div className="Sidebar">
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
      </div>
    </div>
  );
}

export default Sidebar;
