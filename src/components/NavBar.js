import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavBar.css';
import OfekLogo from '../assets/images/OfekLogo.png';

const NavBar = () => {
  return (
    <Router>
        <nav id="nav" className="nav" role="navigation">
            <ul className="nav-links">
                <li>
                    <Link to="/" className="navItem"><img className="ofeklogo" src={OfekLogo} alt="ofek unit logo" /></Link>
                </li>
                <li>
                    <Link to="/about" className="navItem">About us</Link>
                </li>
                <li>
                    <Link to="/pybuild" className="navItem">PyBuild</Link>
                </li>
                <li>
                    <Link to="/tools" className="navItem"><FontAwesomeIcon icon={faCaretDown} style={{marginRight: "10px"}} />Tools</Link>
                </li>
            </ul>
        </nav>
    </Router>
  );
}

export default NavBar;
