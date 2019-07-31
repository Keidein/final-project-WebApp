// Modules.
import React from "react";
import ReactDom from "react-dom";

// Components.
import App from "../Components/App";

document.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(
        <App/>,
        document.getElementById("app")
    );
});