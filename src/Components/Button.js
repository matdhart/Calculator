import React , {Component} from 'react';
import './Button.css'

class Button extends Component {

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
        <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }

}

export default Button;
