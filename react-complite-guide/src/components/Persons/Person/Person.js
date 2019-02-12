import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render(){
        console.log('person js rendering...')
        //return <p>I'm a person and I have {Math.floor(Math.random() * 30)} years old</p>
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I have {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
                <input type="text"
                 onChange={this.props.changed}
                 value={this.props.name}/>
            </div>
        )
    }
}

export default Person;