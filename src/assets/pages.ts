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

export { tools, pages };
