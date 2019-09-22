import React, {Component} from 'react';
import './ThemeBox.css';

class ThemeBox extends Component {

  handleClick = () => {
    this.props.clickHandler();
  }

  render() {
    return (
      <div class="ThemeBox">
        <label>Current Theme: {this.props.name} </label>
        <input type='checkbox' onClick={this.handleClick}></input>
      </div>
    );
  }
}

export default ThemeBox;
