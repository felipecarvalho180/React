import React, { Component } from 'react';
import './App.css';
import Validate from './Validate/Validate';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputEl: ''
  }

  inputChangeHandler = (event) => {
    this.setState({inputEl: event.target.value})
  }

  deleteCharHandler = (index) => {
    const char = this.state.inputEl.split('');
    char.splice(index, 1);
    const updateText = char.join('');
    this.setState({inputEl: updateText});
  }

  render() {
    const charList = this.state.inputEl.split('').map((ch, index) => {
      return <Char character={ch}
                   key={index}
                   clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <input type="text"
         onChange={this.inputChangeHandler}
         value={this.state.inputEl}/>
        <p>{this.state.inputEl}</p>
        <Validate inputLength={this.state.inputEl.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
