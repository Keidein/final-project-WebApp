// Imported Modules.
import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Solutions from "../Components/Solutions";
import Developers from "../Components/Developers";
import Login from "../Components/Login";
import ContentCycle from "../Components/ContentCycle";

export const Handler = (componentText) => {

    let components = [
        <Home/>,
        <About/>,
        <Solutions/>,
        <Developers/>,
        <Login/>
    ]
    

    components.forEach(component => {
        if (componentText.toLowerCase() == component.type.name.toLowerCase()) {
            return component;
        }
    });
}