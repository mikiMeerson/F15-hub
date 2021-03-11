import { Link } from 'react-router-dom';
import OfekLogo from '../../assets/images/OfekLogo.png';

const NavBarLogo = () => (
  <Link to="/">
    <img src={OfekLogo} alt="ofek unit logo" className="logo-icon" />
    <span className="logo-text">F15-HUB</span>
  </Link>
);

export default NavBarLogo;
