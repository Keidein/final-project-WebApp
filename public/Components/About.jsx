// Modules.
import React from "react";

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(

            <container>
                <header>
                    <img id="header-menu-icon" src="https://via.placeholder.com/35"/>
                    <h1>What is Anxiety?</h1>
                </header>

                <div id="about-column-one">
                    <h2 id="article-title"> Anxiety </h2>
                    <div id="article-img-wrapper">
                       <img src="https://via.placeholder.com/150x250" /> 
                       <img src="https://via.placeholder.com/150x250" /> 
                    </div>
                    <div id="about-article">
                        <p class="bold-text">Anxiety is a common and natural feeling that everyone experiences. However, if anxiety is significantly interfering with daily life, then it is important to get help. </p>
                        
                        <p>It is completely natural and normal to become anxious when faced with something that is threatening or dangerous, embarrassing or stressful. </p>

                        <p>This is usually temporary and we can put it out of our minds and continue with our activities.</p>

                        <p>However, if this anxiety is ongoing, and is interfering with your day to day life, then it is considered to be an anxiety disorder</p>
                    </div>
                </div>

                <div id="about-column-two">
                    <h2> Commonly Asked Questions </h2>
                    <div class="question" id="q-one">
                        <img src="https://via.placeholder.com/35" />
                        <h5> How cool is batman? </h5>
                    </div>
                    <div class="question" id="q-two">
                        <img src="https://via.placeholder.com/35" />
                        <h5> How cool is batman? </h5>
                    </div>
                    <div class="question" id="q-three">
                        <img src="https://via.placeholder.com/35" />
                        <h5> How cool is batman? </h5>
                    </div>
                </div>
            </container>

        )
    }
}