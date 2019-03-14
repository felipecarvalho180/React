import React from 'react';
import classes from './Menu.css'

const menu = (props) => (
    <div 
        onClick={props.show}
        className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;