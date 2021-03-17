import { Link } from 'react-router-dom';
import OfekLogo from '../../assets/images/OfekLogo.png';

interface LogoPropsType {
  header: string;
}
const NavBarLogo = ({ header }: LogoPropsType) => (
  <nav>
    <div className="dropdown-menu">
      <div className="dropdown-menu-item">
        <div className="dropdown-container">
          <Link to="/">
            <img src={OfekLogo} alt="ofek unit logo" className="logo-icon" />
            <span className="logo-text">{header}</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBarLogo;
