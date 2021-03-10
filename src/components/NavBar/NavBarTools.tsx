import { Link } from 'react-router-dom';
import { tools } from '../../assets/pages';

import './NavBar.css';

const NavBarTools = () => (
  <div className="dropdown-menu">
    <div className="dropdown-menu-item">
      {tools.map((tool) => (
        <Link to={tool.link} key={tool.display}>
          <span className="tool-item">{tool.display}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default NavBarTools;
