import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import PyBuild from './components/Tools/pybuild';
import CMDWord from './components/Tools/cmd-word';
import DTEFileCreator from './components/Tools/dte-file-creator';
import MemMap from './components/Tools/memmap';
import MissShob from './components/Tools/miss-shob';

import './App.css'

class App extends Component {
  render() {
    return (
      <>
          <Router>
            <NavBar />  
            <div className="content">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/pybuild' component={PyBuild} />
                <Route path='/cmd-word' component={CMDWord} />
                <Route path='/memmap' component={MemMap} />
                <Route path='/dte-file-creator' component={DTEFileCreator} />
                <Route path='/miss-shob' component={MissShob} />
              </Switch>
            </div>
         </Router>
     </>
    );
  }
}

export default App;
