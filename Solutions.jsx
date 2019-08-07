// Modules.
import React from "react";

export default class Solutions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
           <div class="container">


               <header class="solution-header">
                    <img src="./style/images/menu.png" height="35" width="35" /> 
                    <h4 class="header-menu-title"> ANXIETYNZ </h4>
                    <h1 class="header-page-title"> What can be done? </h1>
                </header>

               <div id="solution-top-left" class="solution-portion">

                    <div class="solution-inner">
                       <h2> How can you deal with anxiety?</h2>
                        <p class="bold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quibusdam odit voluptates dolorem? Ea nam fugiat aliquam. Nesciunt necessitatibus, culpa distinctio et dolore asperiores, voluptatem dolorem tenetur aliquid ipsam saepe.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta obcaecati itaque mollitia ratione id nemo? Reprehenderit quod in neque rerum culpa facere dignissimos quam temporibus, quisquam ipsa provident iure.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non quidem quos consequuntur officia dolores illo laboriosam eligendi, reprehenderit explicabo minus eum? Fuga excepturi ipsam omnis atque, sed ad accusamus.
                        </p>
                    </div>

               </div>
               <div class="solution-top-right" class="solution-portion">
                    <img src="./style/images/mind-solutions.png" />
               </div>
               

               <div class="solution-bottom-left" class="solution-portion">
                <img src="./style/images/body-solutions.jpg" />
               </div>
               <div id="solution-bottom-right" class="solution-portion">
                    <div class="solution-inner">
                        <h2> How can you help others with anxiety? </h2>
                        <p class="bold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quibusdam odit voluptates dolorem? Ea nam fugiat aliquam. Nesciunt necessitatibus, culpa distinctio et dolore asperiores, voluptatem dolorem tenetur aliquid ipsam saepe.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta obcaecati itaque mollitia ratione id nemo? Reprehenderit quod in neque rerum culpa facere dignissimos quam temporibus, quisquam ipsa provident iure.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non quidem quos consequuntur officia dolores illo laboriosam eligendi, reprehenderit explicabo minus eum? Fuga excepturi ipsam omnis atque, sed ad accusamus.
                        </p>
                    </div>
               </div>

           </div> 
        )
    }
}