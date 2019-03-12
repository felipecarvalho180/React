import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItens from '../NavigationItens/NavigationItens';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItens/>
            </nav>
        </div>
    );
};

export default sideDrawer;