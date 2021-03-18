import './platforms.css';
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
    {platforms.map((p) => (
      <div
        key={p.id}
        className={`menu-item ${p.style}`}
        role="button"
        tabIndex={0}
        title={p.id}
        onClick={() => switchPlatform(p.id)}
        onKeyDown={() => switchPlatform(p.id)}
      >
        <FontAwesomeIcon icon={p.icon} />
      </div>
    ))}
    ;
  </nav>
);

export default PlatformsMenu;
