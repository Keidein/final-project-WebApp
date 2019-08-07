// Modules.
import React from "react";

export default class Temp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <footer>
                <div id="footer-information">
                    <p>ANXIETYNZ</p>
                    <p>360 Parker Avenue, Wellington, NZ, 6026</p>
                    <p>info@gmail.com</p>
                </div>
                <div id="footer-icons">
                    <img src="https://via.placeholder.com/35"/>
                    <img src="https://via.placeholder.com/35"/>
                    <img src="https://via.placeholder.com/35"/>
                </div>
            </footer>
        )
    }
}