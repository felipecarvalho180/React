import React from 'react';
import classes from './NavigationItens.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItens = (props) => (
    <ul className={classes.NavigationItens}>
        <NavigationItem
            link="/"
            >Burger Builder</NavigationItem>
        <NavigationItem
            link="/"
            >Check Out</NavigationItem> 
    </ul>
);

export default navigationItens;