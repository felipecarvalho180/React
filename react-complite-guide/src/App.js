import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Felipe', age: 21},
      {name: 'Thainá', age: 19},
      {name: 'Eliane', age: 50}
    ]
  }

  switchNameHandler = (newName, newAge) => {
    //console.log('Was clicked');
    //don't do this: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: newAge},
        {name: 'Thainá', age: 19},
        {name: 'Eliane', age: 50}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Felipe', age: 21},
        {name: event.target.value, age: 19},
        {name: 'Eliane', age: 50}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i'm a react developer</h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Théo', 3)}>Switch Names</button>
        <Person name={this.state.persons[0].name}
         age={this.state.persons[0].age}>
         Hobbie: Play in the computer</Person>
        <Person name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Felipe!', 21)}
         changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name}
         age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1', null ,'This also work'));
  }
}

export default App;
