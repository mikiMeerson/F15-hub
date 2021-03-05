import React, {Component} from "react";
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css'

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default App;
