import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props){
    super(props)
    console.log('app js constructor');
  }

  state = {
    persons: [
      {name: 'Felipe', age: 21, id: '123'},
      {name: 'Thainá', age: 19, id: '456'},
      {name: 'Eliane', age: 50, id: '789'}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('app js getDerived', props);
    return state;
  }

  componentDidMount(){
    console.log('app js componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('app js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('app js componentDidUpdate');
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
    console.log('app js render');
    let persons = null;

    if (this.state.showPersons)
      persons = (
        <div>
          <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}/>
        </div>
      );

    return (
        <WithClass classes={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: false});
        }}>Remove Cockpit</button>
        {this.state.showCockpit ? (
            <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}/>
        ) : null}
            {persons}
        </WithClass>
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1', null ,'This also work'));
  }
}

export default App;
