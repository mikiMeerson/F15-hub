import { faQuestionCircle, faHammer } from '@fortawesome/free-solid-svg-icons';

const pages = [
  {
    link: '/about',
    icon: faQuestionCircle,
    display: 'About',
  },
  {
    link: '/pybuild',
    icon: faHammer,
    display: 'PyBuild',
  },
];

const platforms = [
  {
    link: '/f15-hub',
    display: 'F15-HUB',
  },
  {
    link: '/f16-hub',
    display: 'F16-HUB',
  }
];

const tools = [
  {
    link: '/cmd-word',
    display: 'CMD Word',
  },
  {
    link: '/dte-file-creator',
    display: 'DTE File Creator',
  },
  {
    link: '/miss-shob',
    display: 'Miss Shob',
  },
  {
    link: '/memmap',
    display: 'MemMap',
  },
];

export { tools, pages, platforms };
