// Modules.
import React from "react";

export default class Solutions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
           <div className="container">


               <header className="solution-header">
                    <h1 className="header-page-title"> What can be done? </h1>
                </header>

               <div id="solution-top-left" className="solution-portion">

                    <div className="solution-inner">
                       <h2> Self help</h2>
                       <p className="bold">Here are things you can do to;</p>
                        <ul>
                            <li>Connect with others</li>
                            <li>Manage stress</li>
                            <li>Practise relaxation techniques</li>
                            <li>Exercise regularly</li>
                            <li>Get enough sleep</li>
                            <li>Reduce caffeine and alcohol intake</li>
                            <li>Quit smoking</li>
                        </ul>
                    </div>

               </div>
               <div id="solution-top-right" className="solution-portion">
                    <img src="./style/images/mind-solutions.png" />
               </div>
               

               <div id="solution-bottom-left" className="solution-portion">
                <img src="./style/images/body-solutions.jpg" />
               </div>
               <div id="solution-bottom-right" className="solution-portion">
                    <div className="solution-inner">
                        <h2> How can you help others with anxiety? </h2>
                        <p>If you know someone who is experiencing Anxiety, you can help them out:</p>
                        <p>Educate yourself by researching the specific type of anxiety your friend has, its affects, symptoms, and what can be done to help and/or treat it.</p>
                        <p>Ask the person experiencing Anxiety what kind of support they would prefer, rather than guessing. Tailor your support by observing what works in your particular situation.</p>
                        <p>Help temper their thinking by making use of a cognitive therapy technique where you ask them the following questions:</p>
                        <ul>
                            <li>What’s the worst that could happen?</li>
                            <li>What’s the best that could happen?</li>
                            <li>What’s most realistic or likely?</li>
                        </ul>
                    </div>
               </div>


            {/* EXTRA INFO */}
                <div className="solution-extra-information">
                            <h2> When to seek professional help: </h2>
                            <p>If your anxiety has become so great that it is causing you extreme distress or is disrupting your daily routine, then it is important to seek professional help.</p>
                            <p>If you are experiencing a lot of the physical symptoms, then you should start by visiting your GP to make sure your anxiety isn’t caused by a medical condition. </p>
                            <p>If your GP rules out a medical cause, then the next step would be to consult with a therapist who has had experience with anxiety disorders. Most Anxiety disorders, in general, are treated with therapy, medication, or a combination of both. </p>
                    </div>

                    <div className="solution-article-triggers">
                        <h2> How can you avoid anxiety? </h2>
                        <p>To avoid/reduce the symptoms of anxiety, you can aim to reduce your exposure to some of the most common triggers:</p>
                        <ul>
                            <li>Caffiene</li>
                            <li>Stress</li>
                            <li>Skipping meals</li>
                            <li>Negative thinking</li>
                            <li>Financial concerns</li>
                            <li>Conflict</li>
                            <li>Public events or performances</li>
                            <li>Medications</li>
                            <li>Health issues</li>
                            <li>Persona triggers</li>
                        </ul>
                    </div>

           </div> 
        )
    }
}