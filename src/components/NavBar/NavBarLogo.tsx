import { Link } from 'react-router-dom';
import OfekLogo from '../../assets/images/OfekLogo.png';
import LogoStyle from './logo.module.css';

interface LogoPropsType {
  header: string;
}
const NavBarLogo = ({ header }: LogoPropsType) => (
  <nav className={LogoStyle.logoContainer}>
    <Link to="/">
      <img src={OfekLogo} alt="ofek unit logo" className={LogoStyle.logoIcon} />
      <span className={LogoStyle.logoText}>{header}</span>
    </Link>
  </nav>
);

export default NavBarLogo;
