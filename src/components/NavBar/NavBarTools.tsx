import { Link } from 'react-router-dom';
import { tools } from '../../assets/pages';

interface ToolsProps {
  platform: string;
}

const NavBarTools = ({ platform }: ToolsProps) => (
  <div className="dropdown-menu">
    <div className="dropdown-menu-item">
      {tools
        .filter((tool) => platform === 'home' || tool.tags.includes(platform))
        .map((tool) => (
          <Link to={tool.link} key={tool.display}>
            <span className="tool-item">{tool.display}</span>
          </Link>
        ))}
    </div>
  </div>
);

export default NavBarTools;
