// Modules.
import React from "react";

export default class Nav extends React.Component {

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
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}
