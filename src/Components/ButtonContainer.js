import React , {Component} from 'react';
import './ButtonContainer.css';
import Button from './Button.js';

class ButtonContainer extends Component {

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div class="ButtonContainer">
        <div>
          <Button name='7' clickHandler={this.handleClick} />
          <Button name='4' clickHandler={this.handleClick} />
          <Button name='3' clickHandler={this.handleClick} />
          <Button name='0' clickHandler={this.handleClick} />
        </div>

        <div>
          <Button name='8' clickHandler={this.handleClick} />
          <Button name='5' clickHandler={this.handleClick} />
          <Button name='2' clickHandler={this.handleClick} />
          <Button name='.' clickHandler={this.handleClick} />
        </div>

        <div>
          <Button name='9' clickHandler={this.handleClick} />
          <Button name='6' clickHandler={this.handleClick} />
          <Button name='3' clickHandler={this.handleClick} />
          <Button name='=' clickHandler={this.handleClick} />
        </div>

        <div class="five">
          <Button name='C' clickHandler={this.handleClick} />
          <Button name='x' clickHandler={this.handleClick} />
          <Button name='/' clickHandler={this.handleClick} />
          <Button name='+' clickHandler={this.handleClick} />
          <Button name='-' clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }

}

export default ButtonContainer;
