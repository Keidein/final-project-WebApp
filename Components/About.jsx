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
                <header id="about-header">
                    <img src="./style/images/menu.png" height="35" width="35" /> 
                    <h4 class="header-menu-title"> ANXIETYNZ </h4>
                    <h1 class="header-page-title"> What is anxiety? </h1>
                </header>
                <div id="about-column-one">
                    <h2 id="article-title"> Anxiety </h2>
                    <div id="article-img-wrapper">
                       <img src="https://via.placeholder.com/250x150" /> 
                       <img src="https://via.placeholder.com/250x150" /> 
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
                        <img src="./style/images/plus.png" height="30" width="30" />
                        <h5> How cool is batman? </h5>
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
                        <p class="information">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis quaerat ipsam, est recusandae enim aspernatur corporis provident molestiae quasi illum reiciendis accusamus natus magnam facere ex sapiente dolore earum.
                        </p>
                        <ul id="symptom-list">
                            <li> Coolness </li>
                            <li> Coolness </li>
                            <li> Coolness </li>
                            <li> Coolness </li>
                            <li> Coolness </li>
                            <li> Coolness </li>
                        </ul>
                    </div>
                    <div id="symptoms-section-2">
                        
                        <img  src="./style/images/anxiety-symptoms.jpg" height="275" width="275" />
                    </div>
                    <div id="symptoms-section-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos aliquam, animi vero sit sequi, quis cum impedit ipsam iusto eum. Eum magnam esse error expedita unde nesciunt pariatur harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate unde perspiciatis adipisci quod, pariatur nulla qui sed aut temporibus aliquam expedita amet ipsum modi magnam cum consequatur! Repellat, cumque!
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ad esse, iusto architecto suscipit labore maxime! Aspernatur deserunt quis unde temporibus amet. Asperiores labore soluta neque iure quia nisi velit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quos quae beatae sed culpa esse sint omnis eius molestiae ipsam alias vitae eveniet vero ad facilis? Nesciunt beatae quasi provident.
                        </p>
                    </div>
                </div>
            </container>

        )
    }
}