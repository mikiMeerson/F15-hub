import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faCaretDown, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pages } from '../../assets/pages';

import NavBarStyle from './NavBar.module.css';
import NavBarTools from './NavBarTools';
import NavBarLogo from './NavBarLogo';

interface NavBarPropsType {
  toggleMainWidth: () => void;
  mini: boolean;
  platform: {
    id: string;
    header: string;
    style: string;
  };
}

const NavBar = ({ toggleMainWidth, mini, platform }: NavBarPropsType) => {
  const [sideBarWidthClass, setSideBarWidthClass] =
   useState(NavBarStyle.sidebarMin);

  const toggleSideBarWidth = (isMouseEvent: Boolean) => {
    if (isMouseEvent) {
      toggleMainWidth();
      setSideBarWidthClass(mini ? NavBarStyle.sidebarMax : 
                                  NavBarStyle.sidebarMin);
    }
  };

  return (
    <div>
      <nav
        className={`${NavBarStyle.sidebar} ${platform.style} ${sideBarWidthClass}`}
        role="navigation"
        onMouseOver={() => toggleSideBarWidth(true)}
        onFocus={() => toggleSideBarWidth(false)}
        onMouseOut={() => toggleSideBarWidth(true)}
        onBlur={() => toggleSideBarWidth(false)}
      >
        <NavBarLogo header={platform.header} />
        <div className={NavBarStyle.navbarItems}>
          {pages
            .filter(
              (page) =>
                platform.id === 'home' || page.tags.includes(platform.id)
            )
            .map((page) => (
              <Link to={page.link} key={page.display}>
                <FontAwesomeIcon icon={page.icon}
                                 className={NavBarStyle.sidebarIcon} />
                <span className={NavBarStyle.iconText}>{page.display}</span>
              </Link>
            ))}
        </div>
        <nav>
          <div className={NavBarStyle.dropdownMenu}>
            <div className={NavBarStyle.dropdownMenuItem}>
              <div className={NavBarStyle.dropdownContainer}>
                <FontAwesomeIcon icon={faTools}
                                 className={NavBarStyle.sidebarIcon} />
                <span className={NavBarStyle.iconText}>Tools</span>
                <FontAwesomeIcon icon={faCaretDown} 
                                 className={NavBarStyle.dropdownIcon} />
              </div>
              <NavBarTools platform={platform.id} />
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
