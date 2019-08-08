// Modules.
import React from 'react';
import '../Javascript/SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../Javascript/SideDrawer/DrawerToggleButton';
    
export default class Toolbar extends React.Component {
    render() {
        return(
            <header className='toolbar' style={{width: '100%', position: 'fixed', background: 'grey', height: '56px', top: '0', left: '0'}}>
                <nav className='toolbar__navigation' style={{display: 'flex', height: '100%', alignItems: 'center', padding: '0 1rem'}}>
                    
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>

                    <div className='toolbar__logo' style={{marginLeft: '1rem'}}>
                        <a href="/" style={{color: 'white', textDecoration: 'none', fontSize: '1.5rem'}}>AnxietyNZ</a>
                    </div>
                    
                    <div className='spacer' style={{flex: '1'}}/>

                    <div className='toolbar__navigation-items'>
                        <ul style={{listStyle: 'none', margin: '0', padding: '0', display: 'flex'}}>
                            <li style={{padding: '0 0.5rem'}}>
                                <a href="/#/" style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
                            <li style={{padding: '0 0.5rem'}}>
                                <a href="/#/About" style={{color: 'white', textDecoration: 'none'}}>About</a></li>
                            <li style={{padding: '0 0.5rem'}}>
                                <a href="/#/Solutions" style={{color: 'white', textDecoration: 'none'}}>Solutions</a></li>
                            <li style={{padding: '0 0.5rem'}}>
                                <a href="/#/Developers" style={{color: 'white', textDecoration: 'none'}}>Developers</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

