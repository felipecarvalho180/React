import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Felipe', age: 21, id: '123'},
      {name: 'Thainá', age: 19, id: '456'},
      {name: 'Eliane', age: 50, id: '789'}
    ],
    showPersons: false
  }

  /*switchNameHandler = (newName, newAge) => {
    //console.log('Was clicked');
    //don't do this: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: newAge},
        {name: 'Thainá', age: 19},
        {name: 'Eliane', age: 50}
      ]
    })
  }*/

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {

    const inputStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      inputStyle.backgroundColor = 'red';
      inputStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //the same of classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //the same of classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi i'm a react developer</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button 
          style={inputStyle}
          onClick={this.togglePersonsHandler}>
          Toogle Persons</button>
          {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1', null ,'This also work'));
  }
}

export default Radium(App);
