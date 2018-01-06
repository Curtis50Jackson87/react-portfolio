import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div>
          <h1>Curtis Jackson</h1>
          <ul className="Header">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/Projects">Projects</NavLink></li>
           <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
           <Route path="/" component={Home}/>
           <Route path="/Projects" component={Projects}/>
           <Route path="/Contact" component={Contact}/>


          </div>
        </div>
        </HashRouter>

    );
  }
}

export default Main;
