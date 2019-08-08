// Modules.
import React from "react";

export default class Developers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div class="container">
                <header>
                    <h1 class="header-page-title"> Meet our team! </h1>
                </header>


                <div id="first-bio" class="developer-biography">
                    <img src=".\Style\images\eagle-1.jpg" height="250" width="250" />
                    <p> <span> Team Leader </span> </p>
                    <p> Retha Van Der Walt </p>
                </div>
                <div id="second-bio" class="developer-biography">
                    <img src=".\Style\images\eagle-3.jpg" height="250" width="250" />
                    <p> <span> Head Programmer </span> </p>
                    <p> Dylan Etheridge </p>
                </div>
                <div id="third-bio" class="developer-biography">
                    <img src=".\Style\images\eagle-2.jpg" height="250" width="250" />
                    <p> <span> Head Designer </span> </p>
                    <p> Ethan Meleah </p>
                </div>
            </div>
        )
    }
}