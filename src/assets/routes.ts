import Home from '../components/Home';
import About from '../components/About';
import PyBuild from '../components/Tools/pybuild';
import CMDWord from '../components/Tools/cmd-word';
import DTEFileCreator from '../components/Tools/dte-file-creator';
import MemMap from '../components/Tools/memmap';
import MissShob from '../components/Tools/miss-shob';

const routes = [
  {
    link: '/',
    comp: Home,
  },
  {
    link: '/about',
    comp: About,
  },
  {
    link: '/pybuild',
    comp: PyBuild,
  },
  {
    link: '/cmd-word',
    comp: CMDWord,
  },
  {
    link: '/memmap',
    comp: MemMap,
  },
  {
    link: '/dte-file-creator',
    comp: DTEFileCreator,
  },
  {
    link: '/miss-shob',
    comp: MissShob,
  },
];

export { routes };
