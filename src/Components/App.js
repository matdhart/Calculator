import React , {Component} from 'react';
import './App.css';

import Display from './Display.js';
import ButtonContainer from './ButtonContainer.js';
import ThemeBox from './ThemeBox.js';
import Calculator from '../Logic/Calculator.js';
import Theme from '../Logic/Theme.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      operator : null,
      base : null,
      operand : null,
      theme: 'Dark',
    };
  }

  handleClick = buttonName => {
    //calculate click given a button and current state
    this.setState(Calculator(this.state, buttonName));
  }

  toggleTheme = () => {
    this.setState(Theme(this.state));
  }

  render() {
    return (
      <div className={this.state.theme}>
        <ThemeBox clickHandler={this.toggleTheme} name={this.state.theme}/>
        <Display value={this.state.base || this.state.operand || '0'}/>
        <ButtonContainer clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
