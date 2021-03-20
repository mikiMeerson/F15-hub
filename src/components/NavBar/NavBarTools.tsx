import { Link } from 'react-router-dom';
import { tools } from '../../assets/pages';
import NavBarStyle from './navbar.module.css';

interface ToolsProps {
  platform: string;
}

const NavBarTools = ({ platform }: ToolsProps) => (
  <div className={NavBarStyle.dropdownMenu}>
    <div className={NavBarStyle.dropdownMenuItem}>
      {tools
        .filter((tool) => platform === 'home' || tool.tags.includes(platform))
        .map((tool) => (
          <Link to={tool.link} key={tool.display}>
            <span className={NavBarStyle.toolItem}>{tool.display}</span>
          </Link>
        ))}
    </div>
  </div>
);

export default NavBarTools;
