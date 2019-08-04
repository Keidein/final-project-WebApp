// Modules.
import React, { Fragment } from "react";

// Components.
import Home from "./Home";
import Footer from "./Footer";
// Nav Components
import Toolbar from "../Components/Toolbar";
import SideDrawer from "../Javascript/SideDrawer/SideDrawer";
import Backdrop from "../Javascript/SideDrawer/Backdrop";

export default function App() {
    return(
        <Fragment>
            <Home/>
            <Footer/>
        </Fragment>
    );
}