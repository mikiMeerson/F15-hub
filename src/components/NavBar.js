import React, {useState} from "react";
import {Link} from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './NavBar.css';
import OfekLogo from '../assets/images/OfekLogo.png';

const NavBar = props => {
    

    const toggleSideBar = () => {
        props.MinMaxMain();
        if(props.mini) document.getElementById("sidebar").style.width = "250px";
        else document.getElementById("sidebar").style.width = "85px";
    };

  return (
      <div>
        <nav id="sidebar" className="sidebar" role="navigation"
             onMouseOver={() => toggleSideBar()} onMouseOut={() => toggleSideBar()}>
            <Link to={'/'} > 
                <img  src={OfekLogo} alt="ofek unit logo" className="logo-icon" />
                <span className="logo-text">F15-HUB</span>
            </Link>

            <Link to={'/about'}>
                <FontAwesomeIcon icon={faQuestionCircle} className="side-bar-icon"/>
                <span className="icon-text">About</span>
            </Link>
            <Link to={'/pybuild'} >
                <FontAwesomeIcon icon={faHammer} className="side-bar-icon"/>
                <span className="icon-text">PyBuild</span>
            </Link>
            <nav>
                <div className="dropdown-menu">
                    <div className="dropdown-menu-item">
                    <div className="dropdown-container">
                    <FontAwesomeIcon icon={faTools} className="side-bar-icon" />
                    <span className="icon-text">Tools</span>
                    <FontAwesomeIcon icon={faCaretDown} style={{marginLeft: "10px"}}/> 
                    </div>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-item">
                                <Link to="/cmd-word"><span  className="tool-item">CMD Word</span></Link>
                                <Link to="/dte-file-creator"><span className="tool-item">DTE File Creator</span></Link>
                                <Link to="/miss-shob"><span className="tool-item">Miss Shob</span></Link>
                                <Link to="/memmap"><span className="tool-item">MemMap</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
      </div>
  );
}


export default NavBar;
