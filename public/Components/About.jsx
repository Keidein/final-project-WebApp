// Modules.
import React from "react";

import Panel_One from "./AboutPanels/Panel_One";
import Panel_Two from "./AboutPanels/Panel_Two";
import Panel_Three from "./AboutPanels/Panel_Three";

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(

            <container>
                <header id="about-header">
                    <h1 class="header-page-title"> What is anxiety? </h1>
                </header>
                <div id="about-column-one">
                    <h2 id="article-title"> Anxiety </h2>
                    <div id="article-img-wrapper">
                       <img src="https://via.placeholder.com/250x150" /> 
                       <img src="https://via.placeholder.com/250x150" /> 
                    </div>
                    <div id="about-article">
                        <p className="bold-text">Anxiety is a common and natural feeling that everyone experiences. However, if anxiety is significantly interfering with daily life, then it is important to get help. </p>
                            <p>It is completely natural and normal to become anxious when faced with something that is threatening or dangerous, embarrassing or stressful. </p>
                            <p>This is usually temporary and we can put it out of our minds and continue with our activities.</p>
                            <p>However, if this anxiety is ongoing, and is interfering with your day to day life, then it is considered to be an anxiety disorder</p>
                        </div>
                </div>

                <div id="about-column-two">
                    <h2> Commonly Asked Questions </h2>
                    <div class="question" id="q-one">
                        <img src="./style/images/plus.png" height="30" width="30" />
                        <Panel_One/>
                    </div>
                    <div class="question" id="q-two">
                        <img src="./style/images/plus.png" height="30" width="30" />
                        <h5> How cool is batman? </h5>
                    </div>
                    <div class="question" id="q-three">
                    <img src="./style/images/plus.png" height="30" width="30" />
                        <h5> How cool is batman? </h5>
                    </div>
                </div>
                
                <div id="symptoms-area">
                    <div id="symptoms-section-1">
                        <h2>> Symptoms</h2>
                        <p class="information">
                            Some common anxiety symptoms include:
                        </p>
                        <ul id="symptom-list">
                            <li>Hot and cold flushes</li>
                            <li>Shaking</li>
                            <li>Racing heart</li>
                            <li>Tight feeling in the chest or chest pains</li>
                            <li>Struggling to breathe</li>
                            <li>Snowballing worries that get bigger and bigger</li>
                            <li>A racing mind full of thoughts</li>
                            <li>A constant need to check things are right or clean</li>
                            <li>Persistent worrying ideas that seem 'silly or crazy' (pōrangi)</li>
                        </ul>
                    </div>

                    <div id="symptoms-section-2">
                        <img  src="./style/images/anxiety-symptoms.jpg" height="275" width="275" />
                        <h3>Physical Symptoms</h3>
                        <p>Anxiety can cause physical symptoms like pain, a pounding heart or stomach cramps. For some people these physical symptoms are their main concern. </p>
                        <ul>
                            <li>Rapid heartbeat</li>
                            <li>Sweating</li>
                            <li>Trouble breathing</li>
                            <li>Tightness in the chest, chest pain </li>
                            <li>Dizziness </li>
                            <li>Feeling: “Things aren’t real” </li>
                            <li>Feeling: “I don’t feel like myself.” </li>
                            <li>Tingling and numbness in fingers, toes, and other extremities </li>
                            <li>Nausea, vomiting </li>
                            <li>Muscle tension</li>
                            <li>Low energy, exhaustion </li>
                            <li>Changes in body temperature -Shaking, jitters</li>
                            <li>Urgency to urinate or defecate</li>
                            <li>Changes in vision and other senses </li>
                        </ul>
                    </div>


                    <div id="symptoms-section-3">
                    <h3>Cognitive/thinking symptoms</h3>
                        <ul>
                            <li>Worries</li>
                            <li>Negative thoughts about one’s ability to tolerate emotions or future stress </li>
                            <li>Negative predictions about future events </li>
                            <li>Other common thoughts: “I am going crazy!” “I am going to have a heart attack!” “I am going to faint.” </li>
                            <li>Trouble concentrating or keeping attention </li>
                            <li>Magical ideas, phrases or images such as “If I do not wash my hands I will die or someone will be harmed.” </li>
                            <li>Preoccupation with body sensations or functions </li>
                        </ul>
                    </div>

                    <div id="symptoms-section-4">
                    <h3>Behavioural symptoms</h3>
                        <ul>
                            <li>Avoidance of anything that provokes anxiety, including people, places, situations, objects, animals, thoughts, memories, body feelings, etc. </li>
                            <li>Protective, “safety” behaviors </li>
                            <li>Aggression, verbal abuse, lashing out -Alcohol and/or drug use </li>
                            <li>Compulsive behaviors, such as excessive checking or other unreasonable or harmful rituals or routines</li>
                        </ul>
                    </div>

                </div>
            </container>

        )
    }
}