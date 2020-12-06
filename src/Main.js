import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import SMenu from "./SMenu";
  import DMenu from "./DMenu";
  import Events from "./Events";
  import About from "./About";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div> 
                <h1>Four30 Scones</h1>               
                <ul className="header">
                    <li><NavLink to="/SMenu">Scones Menu</NavLink></li>
                    <li><NavLink to="/DMenu">Drink Menu</NavLink></li>                   
                    <li><NavLink to="/Events">Events & Fundraising</NavLink></li>
                    <li><NavLink to="/About">About Us</NavLink></li>
                </ul>
            <div className="content">
                <Route path="/SMenu" component={SMenu} />
                <Route path="/DMenu" component={DMenu} />
                <Route path="/Events" component={Events} />
                <Route path="/About" component={About} />

            </div>
            </div>
            </HashRouter>
        );
    }
}


export default Main;