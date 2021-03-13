import { useState } from 'react';
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
  const [sideBarWidthClass, setSideBarWidthClass] = useState('sidebar-min');
  const [lowerSideBar, setLowerSideBar] = useState(false);
  const [sideBarHeightClass, setSideBarHeightClass] = useState('sidebar-high');

  const toggleSideBarHeight = (isMouseEvent: Boolean) => {
    if(isMouseEvent) {
    setLowerSideBar(!lowerSideBar);
    setSideBarHeightClass(lowerSideBar ? 'sidebar-high' : 'sidebar-low');
    }
  };

  const toggleSideBarWidth = (isMouseEvent: Boolean) => {
    if (isMouseEvent) {
      toggleMainWidth();
      setSideBarWidthClass(mini ? 'sidebar-max' : 'sidebar-min');
    }
  };

  return (
    <div>
      <nav
        className={`sidebar ${sideBarWidthClass}`}
        role="navigation"
        onMouseOver={() => toggleSideBarWidth(true)}
        onFocus={() => toggleSideBarWidth(false)}
        onMouseOut={() => toggleSideBarWidth(true)}
        onBlur={() => toggleSideBarWidth(false)}
      >
        <NavBarLogo toggleSideBarHeight={toggleSideBarHeight} />
        <div className={`navbar-items ${sideBarHeightClass}` }>
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
