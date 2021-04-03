import { RouteProps } from 'react-router';
import About from '../components/About';
import PyBuild from '../components/Tools/PyBuild';
import CMDWord from '../components/Tools/CmdWord';
import DTEFileCreator from '../components/Tools/DteFileCreator';
import MemMap from '../components/Tools/MemMap';
import MissShob from '../components/Tools/MissShob';

const routes: RouteProps[] = [
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
