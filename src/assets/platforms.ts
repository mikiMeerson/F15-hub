import {
  faHome,
  faRocket,
  faSpaceShuttle,
} from '@fortawesome/free-solid-svg-icons';
import PlatformsStyle from '../components/NavBar/platforms.module.css';

const platforms = [
  {
    id: 'home',
    header: 'AV-HUB',
    style: PlatformsStyle.home,
    icon: faHome,
  },
  {
    id: 'F15',
    header: 'F15-HUB',
    style: PlatformsStyle.f15,
    icon: faRocket,
  },
  {
    id: 'F16',
    header: 'F16-HUB',
    style: PlatformsStyle.f16,
    icon: faSpaceShuttle,
  },
];

export { platforms };
