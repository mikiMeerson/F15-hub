import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropDownStyle from './DropDownMenu.module.css';

const DropDownMenu = () => (
  <nav>
    <div className={DropDownStyle.dropdownMenu}>
      <div className={DropDownStyle.dropdownMenuItem}>
        <div className={DropDownStyle.dropdownContainer}>
          <span>Title</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={DropDownStyle.dropdownIcon}
          />
        </div>
        <div className={DropDownStyle.dropdownMenu}>
          <div className={DropDownStyle.dropdownMenuItem}>
            <div>
              <span className={DropDownStyle.DropDownItem}>Item 1</span>
            </div>
            <div>
              <span className={DropDownStyle.DropDownItem}>Item 2</span>
            </div>
            <div>
              <span className={DropDownStyle.DropDownItem}>Item 3</span>
            </div>
            <div>
              <span className={DropDownStyle.DropDownItem}>Item 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default DropDownMenu;
