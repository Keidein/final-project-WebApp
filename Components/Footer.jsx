// Modules.
import React from "react";

export default class Temp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <container>
                <footer>
                    <div id="footer-information">
                        <h3> ANXIETY NZ </h3>
                        <p id="footer-information">330 Parker Avenue</p>
                        <p id="email">info.anxietyNZ@mail.com</p>
                    </div>
                    <div id="footer-icons">
                        <img src="./style/images/facebook.png" height="35" weight="35"/>
                        <img src="./style/images/twitter.png" height="35" weight="35"/>
                        <img src="./style/images/insta.png" height="35" weight="35"/>
                    </div>
                </footer>
            </container>
        )
    }
}