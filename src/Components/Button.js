import React , {Component} from 'react';
import './Button.css'

class Button extends Component {

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }

}

export default Button;
