// Modules.
import React from "react";

class PanelTwo extends React.Component {
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
            <main>
                <div className="panels_container">
                    <div className="panels">
                        <div className="panel" id="panel-two">
                            <div className="panel_body">
                                <h5> How are Anxiety Disorders diagnosed? </h5>
                                <button style={{position: 'relative', marginLeft: '10px', fontSize: '18px', fontWeight: 'bold'}}
                                onClick={(event) => { this.toggleDiv(); this.clicked();}}> 
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
            <div style={{paddingBottom: '20px', paddingLeft: '15px', paddingRight: '15px'}}>
                <p>
                    Primary care physicians and psychiatrists diagnose someone as having an anxiety disorder if symptoms occur for six months on more days than not, and significantly interfere with the person’s ability to function at home, work or school.
                </p>
                <p>
                    Doctors perform physical and psychological evaluations to rule out other causes for the symptoms of anxiety. Cardiovascular disease, thyroid problems, menopause, substance abuse and/or drug side effects, such as from steroids, may cause symptoms similar to those of an anxiety disorder.
                </p>
            </div>
            
        )
    }
}

export default PanelTwo;