import React , {Component} from 'react';
import './Display.css';

class Display extends Component {

  render() {
    return (
      <div class="Display">
        <p class='blink' id="Value">{this.props.value}</p>
      </div>
    );
  }

}

export default Display;
