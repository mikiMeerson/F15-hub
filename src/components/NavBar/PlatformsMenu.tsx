import './CircleMenu.css';
import {
  faSpaceShuttle,
  faRocket,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PlatformsProps {
  switchPlatform: (newPlatform: string) => void;
}

const PlatformsMenu = ({ switchPlatform }: PlatformsProps) => (
  <nav className="menu">
    <input type="checkbox" className="menu-open" id="menu-open" />
    <label className="menu-open-button" htmlFor="menu-open">
      <span className="lines line-1" />
      <span className="lines line-2" />
      <span className="lines line-3" />
    </label>

    <div className="menu-item home-style">
      <FontAwesomeIcon icon={faHome} />
    </div>
    <div
      className="menu-item f15-style"
      role="button"
      tabIndex={0}
      title="f15"
      onClick={() => switchPlatform('F15')}
      onKeyDown={() => switchPlatform('F15')}
    >
      <FontAwesomeIcon icon={faSpaceShuttle} />
    </div>
    <div
      className="menu-item f16-style"
      role="button"
      tabIndex={0}
      title="f16"
      onClick={() => switchPlatform('F16')}
      onKeyDown={() => switchPlatform('F16')}
    >
      <FontAwesomeIcon icon={faRocket} />
    </div>
  </nav>
);

export default PlatformsMenu;
