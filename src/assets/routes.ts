import { RouteProps } from 'react-router';
import About from '../components/About';
import PyBuild from '../components/Tools/pybuild';
import CMDWord from '../components/Tools/cmd-word';
import DTEFileCreator from '../components/Tools/dte-file-creator';
import MemMap from '../components/Tools/memmap';
import MissShob from '../components/Tools/miss-shob';

const routes : RouteProps[] = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/pybuild',
    component: PyBuild,
  },
  {
    path: '/cmd-word',
    component: CMDWord,
  },
  {
    path: '/memmap',
    component: MemMap,
  },
  {
    path: '/dte-file-creator',
    component: DTEFileCreator,
  },
  {
    path: '/miss-shob',
    component: MissShob,
  },
];

export { routes };
