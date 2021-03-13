import { Link } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OfekLogo from '../../assets/images/OfekLogo.png';
import NavBarPlatforms from './NavBarPlatforms';

interface NavBarLogoPropsType {
  toggleSideBarHeight: (isMouseEvent: Boolean) => void;
}

const NavBarLogo = ({ toggleSideBarHeight }: NavBarLogoPropsType) => (
  <nav    
      onMouseOver={() => toggleSideBarHeight(true)}
      onFocus={() => toggleSideBarHeight(false)}
      onMouseOut={() => toggleSideBarHeight(true)}
      onBlur={() => toggleSideBarHeight(false)}>
    <div className="dropdown-menu">
      <div className="dropdown-menu-item">
        <div className="dropdown-container">
          <Link to="/">
            <img src={OfekLogo} alt="ofek unit logo" className="logo-icon" />
            <span className="logo-text">F15-HUB</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </Link>
        </div>
        <NavBarPlatforms />
      </div>
    </div>
  </nav>
);

export default NavBarLogo;
