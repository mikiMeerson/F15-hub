import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { platforms } from '../../assets/platforms';
import PlatformsStyle from './Platforms.module.css';
import RoundButtonStyle from '../BasicComponents/RoundButton.module.css';

interface PlatformsProps {
  switchPlatform: (newPlatform: string) => void;
}

const PlatformsMenu = ({ switchPlatform }: PlatformsProps) => (
  <nav className={PlatformsStyle.menu}>
    <input type="checkbox" className={PlatformsStyle.menuOpen} id="menu-open" />
    <label
      className={`${RoundButtonStyle.roundButton} ${PlatformsStyle.menuOpenButton}`}
      htmlFor="menu-open"
    >
      <span className={`${PlatformsStyle.lines} ${PlatformsStyle.line1}`} />
      <span className={`${PlatformsStyle.lines} ${PlatformsStyle.line2}`} />
      <span className={`${PlatformsStyle.lines} ${PlatformsStyle.line3}`} />
    </label>
    {platforms.map((platform) => (
      <button
        type="button"
        key={platform.id}
        className={`${PlatformsStyle.menuItem} ${platform.style} ${RoundButtonStyle.roundButton}`}
        tabIndex={0}
        title={platform.id}
        onClick={() => switchPlatform(platform.id)}
        onKeyDown={() => switchPlatform(platform.id)}
      >
        <FontAwesomeIcon icon={platform.icon} />
      </button>
    ))}
  </nav>
);

export default PlatformsMenu;
