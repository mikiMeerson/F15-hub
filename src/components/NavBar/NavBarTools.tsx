import { tools } from '../../assets/pages';
import NavBarToolItem from './NavBarToolItem';

interface ToolsProps {
  platform: string;
}

const NavBarTools = ({ platform }: ToolsProps) => (
  <div className="dropdown-menu">
    <div className="dropdown-menu-item">
      {tools
        .filter((tool) => tool.tags.includes(platform))
        .map((tool) => (
          <NavBarToolItem
            key={tool.link}
            link={tool.link}
            display={tool.display}
          />
        ))}
    </div>
  </div>
);

export default NavBarTools;
