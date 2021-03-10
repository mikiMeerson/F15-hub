import { Link } from 'react-router-dom';
import { faCaretDown, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pages } from '../../assets/pages';

import './NavBar.css';
import NavBarTools from './NavBarTools';
import NavBarLogo from './NavBarLogo';

interface NavBarPropsType {
  toggleMainWidth: () => void;
  mini: Boolean;
}
const NavBar = ({ toggleMainWidth, mini }: NavBarPropsType) => {
  const SideBarElement: HTMLElement | null = document.getElementById('sidebar');

  const toggleSideBar = (mouse: Boolean) => {
    if (mouse) {
      toggleMainWidth();
      if (SideBarElement) {
        if (mini) SideBarElement.style.width = '250px';
        else SideBarElement.style.width = '85px';
      }
    }
  };

  return (
    <div>
      <nav
        id="sidebar"
        className="sidebar"
        role="navigation"
        onMouseOver={() => toggleSideBar(true)}
        onFocus={() => toggleSideBar(false)}
        onMouseOut={() => toggleSideBar(true)}
        onBlur={() => toggleSideBar(false)}
      >
        <NavBarLogo />
        <div>
          {pages.map((page) => (
            <Link to={page.link} key={page.display}>
              <FontAwesomeIcon icon={page.icon} className="side-bar-icon" />
              <span className="icon-text">{page.display}</span>
            </Link>
          ))}
        </div>
        <nav>
          <div className="dropdown-menu">
            <div className="dropdown-menu-item">
              <div className="dropdown-container">
                <FontAwesomeIcon icon={faTools} className="side-bar-icon" />
                <span className="icon-text">Tools</span>
                <FontAwesomeIcon icon={faCaretDown} id="dropdown-icon" />
              </div>
              <NavBarTools />
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
