import React from 'react';

const drawerToggleButton = props => (
    <button className="toggle-button" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '24px', width: '30px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0', boxSizing: 'border-box'}} onClick={props.click}>
        <div className="toggle-button__line" style={{width: '30px', height: '2px', background: 'white'}}/>
        <div className="toggle-button__line" style={{width: '30px', height: '2px', background: 'white'}}/>
        <div className="toggle-button__line" style={{width: '30px', height: '2px', background: 'white'}}/>
    </button>
);

export default drawerToggleButton;