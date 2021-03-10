import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import About from './About';
import PyBuild from './Tools/pybuild';
import CMDWord from './Tools/cmd-word';
import DTEFileCreator from './Tools/dte-file-creator';
import MemMap from './Tools/memmap';
import MissShob from './Tools/miss-shob';

const Main = () => {
  const [minimizeSideBar, setMinimizeSideBar] = useState(true);
  const [mainId, setMainId] = useState("main-max");

  const toggleMainWidth = () => {
    setMinimizeSideBar(!minimizeSideBar);
    setMainId(minimizeSideBar ? "main-min" : "main-max");
  };

  return (
    <Router>
      <NavBar toggleMainWidth={toggleMainWidth} mini={minimizeSideBar} />
      <div className="content" id={mainId}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pybuild" component={PyBuild} />
          <Route path="/cmd-word" component={CMDWord} />
          <Route path="/memmap" component={MemMap} />
          <Route path="/dte-file-creator" component={DTEFileCreator} />
          <Route path="/miss-shob" component={MissShob} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
