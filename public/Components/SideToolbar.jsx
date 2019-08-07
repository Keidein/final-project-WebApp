// Modules.
import React, { Component } from "react";

// Components.
import Toolbar from "./Toolbar";
import SideDrawer from "../Javascript/SideDrawer/SideDrawer";
import Backdrop from "../Javascript/SideDrawer/Backdrop";

class SideToolbar extends Component {
    // NAVIGATION
    state = {
        sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    // APP //
    render() {
        // Opening and closing Nav bar
        let sideDrawer;
        let backdrop;
        if (this.state.sideDrawerOpen){
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <div style={{height: '100%'}}>
                {/* Nav */}
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {sideDrawer}
                {backdrop}

                {/* Content */}
                <main style={{marginTop: '64px'}}>
                    <p>This is the page content</p>
                </main>
            </div>
        )
    }
}

export default SideToolbar;