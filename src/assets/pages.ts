import { faQuestionCircle, faHammer } from '@fortawesome/free-solid-svg-icons';

const pages = [
  {
    link: '/about',
    icon: faQuestionCircle,
    display: 'About',
    tags: ['F15', 'F16'],
  },
  {
    link: '/pybuild',
    icon: faHammer,
    display: 'PyBuild',
    tags: ['F15'],
  },
];

const tools = [
  {
    link: '/cmd-word',
    display: 'CMD Word',
    tags: ['F15', 'F16'],
  },
  {
    link: '/dte-file-creator',
    display: 'DTE File Creator',
    tags: ['F15', 'F16'],
  },
  {
    link: '/miss-shob',
    display: 'Miss Shob',
    tags: ['F15'],
  },
  {
    link: '/memmap',
    display: 'MemMap',
    tags: ['F16'],
  },
];

export { tools, pages };
