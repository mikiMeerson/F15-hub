import { Link } from 'react-router-dom';

interface ToolItemPropsType {
  link: string;
  display: string;
}

const NavBarToolItem = ({ link, display }: ToolItemPropsType) => (
  <Link to={link} key={display}>
    <span className="tool-item">{display}</span>
  </Link>
);

export default NavBarToolItem;
