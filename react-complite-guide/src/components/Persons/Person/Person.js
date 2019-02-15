import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
//import classes from './Person.css';

class Person extends Component {
    render(){
        console.log('person js rendering...')
        //return <p>I'm a person and I have {Math.floor(Math.random() * 30)} years old</p>
        return (
            <Auxiliary>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I have {this.props.age} years old.
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Auxiliary>
        );
    }
}

export default Person;