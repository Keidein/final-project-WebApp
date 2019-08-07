// Modules.
import React from "react";

class PanelOne extends React.Component {
    constructor(props) {
        super( props );
        this.state = { show : true, clicked: false };

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
                        <div className="panel" id="panel-one">
                            <div className="panel_heading">
                                <h5> What are the most common types of Anxiety Disorders? </h5>
                            </div>
                            <div className="panel_body" id="a-one">
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
                    <li>Generalised Anxiety Disorder</li>
                    <li>Obsessive-Compulsive Disorder (OCD)</li>
                    <li>Panic Disorder</li>
                    <li>Post-Traumatic Stress Disorder (PTSD)</li>
                    <li>Social Phobia (or Social Anxiety Disorder)</li>
                </ul>
            </div>
            
        )
    }
}

export default PanelOne;