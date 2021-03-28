import { faCaretDown, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarTools from './NavBarTools';
import NavBarStyle from './NavBar.module.css';
import DropDownStyle from '../BasicComponents/DropDownMenu.module.css';

interface MenuProps {
  platform: {
    id: string;
    header: string;
    style: string;
  };
}

const DropDownMenu = ({ platform }: MenuProps) => (
  <nav>
    <div className={DropDownStyle.dropdownMenu}>
      <div className={DropDownStyle.dropdownMenuItem}>
        <div className={DropDownStyle.dropdownContainer}>
          <FontAwesomeIcon icon={faTools} className={NavBarStyle.sidebarIcon} />
          <span className={NavBarStyle.iconText}>Tools</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={DropDownStyle.dropdownIcon}
          />
        </div>
        <NavBarTools platform={platform.id} />
      </div>
    </div>
  </nav>
);

export default DropDownMenu;
