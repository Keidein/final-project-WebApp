// Modules.
import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <container>
                <div class="home-container">
                    <div id="feature">

                    <h1> Ever find you can't stop worrying or feeling afraid? </h1>
                    </div>
                
                    <div id="home-buttons">
                        <div id="home-blurb">
                            <p>
                                We provide education and support for anxiety disorders
                            </p>
                        </div>
                        {/* <div id="home-button-wrapper">
                            <button> Anxiety One </button>
                            <button> Anxiety Two </button>
                            <button> Anxiety Three </button>
                            <button> Anxiety Four </button>
                        </div> */}
                     </div>                   
                </div>
            </container>
        )
    }
}