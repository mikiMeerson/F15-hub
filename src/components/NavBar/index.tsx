import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pages } from '../../assets/pages';

import NavBarStyle from './NavBar.module.css';
import NavBarLogo from './NavBarLogo';
import DropDownMenu from './DropDownMenu';

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
  const [sideBarWidthClass, setSideBarWidthClass] = useState(
    NavBarStyle.sidebarMin
  );

  const toggleSideBarWidth = (isMouseEvent: Boolean) => {
    if (isMouseEvent) {
      toggleMainWidth();
      setSideBarWidthClass(
        mini ? NavBarStyle.sidebarMax : NavBarStyle.sidebarMin
      );
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
                <FontAwesomeIcon
                  icon={page.icon}
                  className={NavBarStyle.sidebarIcon}
                />
                <span className={NavBarStyle.iconText}>{page.display}</span>
              </Link>
            ))}
        </div>
        <DropDownMenu platform={platform} />
      </nav>
    </div>
  );
};

export default NavBar;
