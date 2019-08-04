import React from 'react';

const sideDrawer = props => (
    <nav className="side-drawer" style={{height: '100%', background: 'white', boxShadow: '1px 0px 7px rgba(0,0,0,0.5)', position: 'fixed', top: '0', left: '0', width: '70%', maxWidth: '400px', zIndex: '200'}}>
        <ul style={{height: '100%', listStyle: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <li style={{margin: '0.5rem 0'}}>
                <a href="/" style={{textDecoration: 'none', fontSize: '1.2rem'}}>Home</a>
            </li>
            <li style={{margin: '0.5rem 0'}}>
                <a href="/" style={{textDecoration: 'none', fontSize: '1.2rem'}}>About</a>
            </li>
            <li style={{margin: '0.5rem 0'}}>
                <a href="/" style={{textDecoration: 'none', fontSize: '1.2rem'}}>Solutions</a>
            </li>
            <li style={{margin: '0.5rem 0'}}>
                <a href="/" style={{textDecoration: 'none', fontSize: '1.2rem'}}>Developers</a>
            </li>
        </ul>
    </nav>
);

export default sideDrawer;