import { Link } from 'react-router-dom';
import { tools } from '../../assets/pages';
import DropDownStyle from '../BasicComponents/DropDownMenu.module.css';

interface ToolsProps {
  platform: string;
}

const NavBarTools = ({ platform }: ToolsProps) => (
  <div className={DropDownStyle.dropdownMenu}>
    <div className={DropDownStyle.dropdownMenuItem}>
      {tools
        .filter((tool) => platform === 'home' || tool.tags.includes(platform))
        .map((tool) => (
          <Link to={tool.link} key={tool.display}>
            <span className={DropDownStyle.DropDownItem}>{tool.display}</span>
          </Link>
        ))}
    </div>
  </div>
);

export default NavBarTools;
