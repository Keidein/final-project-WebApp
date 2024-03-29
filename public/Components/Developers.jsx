// Modules.
import React from "react";

export default class Developers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className="container">
                <header>
                    <h1 className="header-page-title"> Meet our team! </h1>
                </header>


                <div id="first-bio" className="developer-biography">
                    <img src="Style/images/eagle-1.jpg" height="335" width="300"/>
                    <h2>Dylan Etheridge</h2>
                    <p>Web Developer</p>
                </div>
                <div id="second-bio" className="developer-biography">
                    <img src="Style/images/eagle-2.jpg" height="335" width="300"/>
                    <h2>Ethan Meleah</h2>
                    <p>User Interface Designer</p>
                </div>
                <div id="third-bio" className="developer-biography">
                    <img src="Style/images/eagle-3.jpg" height="335" width="300"/>
                    <h2>Retha van der Walt</h2>
                    <p>Project Manager</p>
                </div>
            </div>
        )
    }
}