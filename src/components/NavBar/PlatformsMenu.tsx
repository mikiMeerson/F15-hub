import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { platforms } from '../../assets/platforms';
import PlatformsStyle from './platforms.module.css';

interface PlatformsProps {
  switchPlatform: (newPlatform: string) => void;
}

const PlatformsMenu = ({ switchPlatform }: PlatformsProps) => (
  <nav className={PlatformsStyle.menu}>
    <input type="checkbox" className={PlatformsStyle.menuOpen} id="menu-open" />
    <label className={PlatformsStyle.menuOpenButton} htmlFor="menu-open">
      <span className={`${PlatformsStyle.lines} ${PlatformsStyle.line1}`}/>
      <span className={`${PlatformsStyle.lines} ${PlatformsStyle.line2}`}/>
      <span className={`${PlatformsStyle.lines} ${PlatformsStyle.line3}`}/>
    </label>
    {platforms.map((platform) => (
      <div
        key={platform.id}
        className={`${PlatformsStyle.menuItem} ${platform.style}`}
        role="button"
        tabIndex={0}
        title={platform.id}
        onClick={() => switchPlatform(platform.id)}
        onKeyDown={() => switchPlatform(platform.id)}
      >
        <FontAwesomeIcon icon={platform.icon} />
      </div>
    ))}
  </nav>
);

export default PlatformsMenu;
