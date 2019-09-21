import React , {Component} from 'react';
import './App.css';

import Display from './Display.js';
import ButtonContainer from './ButtonContainer.js';
import Calculator from '../Logic/Calculator.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      operator : null,
      base : null,
      operand : null,
    };
  }

  handleClick = buttonName => {
    //calculate click given a button and current state
    this.setState(Calculator(this.state, buttonName));
    console.log(this.state.operator);
    console.log(this.state.base);
    console.log(this.state.operand);
    console.log("==========");
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.base || this.state.operand || '0'}/>
        <ButtonContainer clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
