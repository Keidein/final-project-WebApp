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
                        <p class="bold-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit quis sapiente voluptas illum ad consequuntur quas consequatur eos, eaque dolore, sequi cumque neque corrupti. Ad blanditiis totam recusandae incidunt!
                        </p>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatem debitis eos illo? Pariatur dolorum libero possimus reiciendis ipsa distinctio cum cumque. Optio saepe ducimus eaque dignissimos veritatis doloribus voluptatibus? </p>

                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, nisi excepturi laudantium modi saepe officiis facilis perferendis eveniet sunt hic impedit laborum fugiat dignissimos nostrum error ex corrupti tempore harum!
                        </p>
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