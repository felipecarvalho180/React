import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItens from '../NavigationItens/NavigationItens';
import Menu from '../SideDrawer/Menu/Menu';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu show={props.clicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItens/>
        </nav>
    </header>
);

export default toolbar;