import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('person js rendering...')
        //return <p>I'm a person and I have {Math.floor(Math.random() * 30)} years old</p>
        return (
            <Auxiliary>
                    {this.context.authenticated ? (
                        <p>Authenticated!</p> ) : (
                        <p>Please Log in</p>
                    )}           
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I have {this.props.age} years old.
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);