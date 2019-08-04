// Modules.
import React from "react";

export default class Solutions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
           <container>
                <main style={{marginTop: '64px'}}>
                    <h2> Self help </h2>

                    <div class="solution-top solution-column solution-left">
                            <p class="bold">Here are things you can do to;</p>
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

                    <div class="solution-top solution-column solution-right">
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                    </div>

                    <div class="solution-top solution-column solution-left">
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                            <img src="https://via.placeholder.com/150"/>
                    </div>

                    <div class="solution-top solution-column solution-right">
                            <h2> When to seek professional help: </h2>
                            <p>If your anxiety has become so great that it is causing you extreme distress or is disrupting your daily routine, then it is important to seek professional help.</p>
                            <p>If you are experiencing a lot of the physical symptoms, then you should start by visiting your GP to make sure your anxiety isn’t caused by a medical condition. </p>
                            <p>If your GP rules out a medical cause, then the next step would be to consult with a therapist who has had experience with anxiety disorders. Most Anxiety disorders, in general, are treated with therapy, medication, or a combination of both. </p>
                    </div>

                        <div class="solution-article-triggers">
                            <h2> How can you avoid anxiety? </h2>
                            <p>To avoid/reduce the symptoms of anxiety, you can aim to reduce your exposure to some of ots most common triggers:</p>
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
                </main>
           </container> 
        )
    }
}