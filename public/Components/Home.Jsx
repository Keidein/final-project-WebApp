// Modules.
import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <main style={{marginTop: '64px'}}>
                <div>
                    <header>
                        <h4 class="header-menu-title"> ANXIETYNZ </h4>
                    </header>

                    <div class="home-container">
                        <div id="feature">
                        <div id="feature-menu-wrapper">
                            <img src="https://via.placeholder.com/35" />
                        </div>
                        <h1> Can't stop worrying or feeling afraid? </h1>
                        </div>
                    
                        <div id="home-buttons">
                            <div id="home-blurb">
                                <p>
                                    If, over a prolonged period of time, you've been contanstly worried, afraid or panicking over things that might happen or even for no reason at all, then you may be experiencing Anxiety.
                                </p>
                            </div>
                            <div id="home-button-wrapper">
                                <button> <a href="/">Symptoms</a> </button>
                                <button> <a href="/">Triggers</a> </button>
                                <button> <a href="/">Types</a> </button>
                                <button> <a href="/">Seeking Help</a> </button>
                            </div>
                        </div>                   
                    </div>
                </div>
            </main>
        )
    }
}