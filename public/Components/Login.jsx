// Modules.
import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Password information and check booleans.
            data: [{
                "user1": "pass1",
                "user2": "pass2",
                "user3": "pass3",
                "user4": "pass4"
            }],
            username: null,
            password: null,
            usernameCheck: false,
            passwordCheck: false
        }

        this.authenticate = this.authenticate.bind(this);
        this.updateCredentials = this.updateCredentials.bind(this);
    }

    // Authentication when logging in.
    authenticate(e) {
        e.preventDefault();

        if (this.state.username < 5 || !(this.state.username in this.state.data[0])) {
            this.state.usernameCheck = true;
            document.getElementById("loginError").style.display = "block";
        } else {
            this.state.usernameCheck = true;
            document.getElementById("loginError").style.display = "none";
        }

        if (this.state.password < 5 || this.state.password != this.state.data[0][this.state.username]) {
            this.state.passwordCheck = false;
            document.getElementById("loginError").style.display = "block";
        } else {
            this.state.passwordCheck = true;
            document.getElementById("loginError").style.display = "none";
        }

        if (this.state.usernameCheck && this.state.passwordCheck) {
            location.href = "/";
        }
    }

    // Updating the credentials.
    updateCredentials(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return(

            <div className="container">
                <header className="login-header">
                    <h1 className="header-page-title"> Login </h1>
                </header>

                <div id="login_div">
                    <div id="login_form" >
                        <p id="loginError" style={{display: "none"}}>There was a problem with logging in... Please try again.</p>
                            <form onSubmit={this.authenticate}>
                                <input id="username" placeholder="Username" onChange={this.updateCredentials}></input>
                                <input id="password" placeholder="Password" type="password" onChange={this.updateCredentials}></input>
                                <button id="submit_btn">Submit</button>
                            </form>
                    </div>
                </div>
            </div>

        )
    }
}