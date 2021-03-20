import './Platforms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { platforms } from '../../assets/platforms';

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
    {platforms.map((platform) => (
      <div
        key={platform.id}
        className={`menu-item ${platform.style}`}
        role="button"
        tabIndex={0}
        title={platform.id}
        onClick={() => switchPlatform(platform.id)}
        onKeyDown={() => switchPlatform(platform.id)}
      >
        <FontAwesomeIcon icon={platform.icon} />
      </div>
    ))}
    ;
  </nav>
);

export default PlatformsMenu;
