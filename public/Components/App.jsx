// Modules.
import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Components.
import Home from "./Home";
import About from "./About";
import Solutions from "./Solutions";
import Developers from "./Developers";
import Footer from "./Footer";
import SideToolbar from "./SideToolbar";

export default function App() {
    return(
        <Fragment>
            <SideToolbar/>
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Solutions" component={Solutions}/>
                <Route path="/Developers" component={Developers}/>
            </Router>
            <Footer/>
        </Fragment>
    );
}