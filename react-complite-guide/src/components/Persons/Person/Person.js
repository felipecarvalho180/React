import React from 'react';
import classes from './Person.css';

const person = (props) => {
    //return <p>I'm a person and I have {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I have {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;