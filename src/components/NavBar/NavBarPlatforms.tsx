import { Link } from 'react-router-dom';
import { platforms } from '../../assets/pages';

import './NavBar.css';

const NavBarPlatforms = () => (
  <div className="dropdown-menu">
    <div className="dropdown-menu-item" >
      {platforms.map((platform) => (
        <Link to={platform.link} key={platform.display} className="platform-item">
          <span>{platform.display}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default NavBarPlatforms;
