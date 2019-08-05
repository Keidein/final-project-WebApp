// Modules.
import React from "react";

export default class Developers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <contianer>
                <header>
                    <img src="https://via.placeholder.com/35" /> 
                    <h4 class="header-menu-title"> ANXIETYNZ </h4>
                    <h1 class="header-page-title"> Meet our Team </h1>
                </header>

                <h2>Developers</h2>
                <div id="first-bio" class="developer-biography">
                    <img src="https://via.placeholder.com/250" />
                    <h3>Dylan Etheridge</h3>
                </div>

                <br/>

                <div id="second-bio" class="developer-biography">
                    <img src="https://via.placeholder.com/250" />
                    <h3>Ethan Meleah</h3>
                </div>

                <br/>

                <div id="third-bio" class="developer-biography">
                    <img src="https://via.placeholder.com/250" />
                    <h3>Retha van der Walt</h3>
                </div>

                <br/>
            </contianer>
        )
    }
}