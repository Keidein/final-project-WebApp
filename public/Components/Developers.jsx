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
                    <img src="https://via.placeholder.com/250" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit. Dolorem, aliquid ipsam assumenda quasi aut ut! Impedit in provident similique hic ea cumque eius neque corrupti. Quas, magni quidem?  </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae perferendis consectetur ab voluptates similique, tempora repellat, maiores necessitatibus optio voluptatibus totam quaerat ut soluta laudantium dicta? Nam, eligendi minus. </p>
                </div>
                <div id="second-bio" class="developer-biography">
                    <img src="https://via.placeholder.com/250" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit. Dolorem, aliquid ipsam assumenda quasi aut ut! Impedit in provident similique hic ea cumque eius neque corrupti. Quas, magni quidem?  </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae perferendis consectetur ab voluptates similique, tempora repellat, maiores necessitatibus optio voluptatibus totam quaerat ut soluta laudantium dicta? Nam, eligendi minus. </p>
                </div>
                <div id="third-bio" class="developer-biography">
                    <img src="https://via.placeholder.com/250" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit. Dolorem, aliquid ipsam assumenda quasi aut ut! Impedit in provident similique hic ea cumque eius neque corrupti. Quas, magni quidem?  </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae perferendis consectetur ab voluptates similique, tempora repellat, maiores necessitatibus optio voluptatibus totam quaerat ut soluta laudantium dicta? Nam, eligendi minus. </p>
                </div>
            </div>
        )
    }
}