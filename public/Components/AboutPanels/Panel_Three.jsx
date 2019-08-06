// Modules.
import React from "react";

class PanelThree extends React.Component {
    constructor(props) {
        super( props );
        this.state = { show : false, clicked: true };

        this.toggleDiv = this.toggleDiv.bind(this)
    }

    // open and close answer body
    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

    // change button text when clicked
    clicked = () => {
        const { clicked } = this.state;
        this.setState( { clicked : !clicked } )
    }

    render() {
        return (
            <main style={{marginTop: '64px'}}>
                <div className="panels_container">
                    <div className="panels">
                        <div className="panel" id="panel-three">
                            <div className="panel_heading">
                                <h5> What are some common treatments? </h5>
                            </div>
                            <div className="panel_body" id="a-three">
                                <button onClick={(event) => { this.toggleDiv(); this.clicked();}}> 
                                    {this.state.clicked? '+' : '-'}
                                </button>
                                    { this.state.show && <Body />}
                            </div>
                        </div>                   
                    </div>
                </div>
            </main>
        )
    }
}

class Body extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Psychotherapy</li>
                    <li>Cognitive Behavioral Therapy (CBT)</li>
                    <li>Self-help or Support groups</li>
                    <li>Stress-Management techniques</li>
                    <li>Anti-anxiety medications</li>
                </ul>
            </div>
            
        )
    }
}

export default PanelThree;