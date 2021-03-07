import { Link } from 'react-router-dom';
import {
  faCaretDown,
  faQuestionCircle,
  faHammer,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tools from '../assets/tools.json';

import './NavBar.css';
import OfekLogo from '../assets/images/OfekLogo.png';

interface NavBarPropsType {
  toggleMainWidth:() => void;
  mini: Boolean;
}
const NavBar = ({ toggleMainWidth, mini }: NavBarPropsType) => {
  const SideBarElement: HTMLElement | null = document.getElementById('sidebar');

  const pages =  [
    {
        link: "/about",
        icon: faQuestionCircle,
        display: "About"
    },
    {
        link: "/pybuild",
        icon: faHammer,
        display: "PyBuild"
    }
  ];

  const toggleSideBar = (mouse: Boolean) => {
    if(mouse) {
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
        <Link to="/">
          <img src={OfekLogo} alt="ofek unit logo" className="logo-icon" />
          <span className="logo-text">F15-HUB</span>
        </Link>
        <div>
          {pages.map((page) => (
            <Link to={page.link} key={page.display} >
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
                <FontAwesomeIcon icon={faCaretDown} id="dropdown-icon"/>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-menu-item">
                  {tools.map(tool => (
                    <Link to={tool.link} key={tool.display}>
                      <span className="tool-item">{tool.display}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div> 
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
