import React, { Component } from 'react';

class CoordinatesButton extends Component {

  
  handleClick = (e) => {
    // console.log(e.pageX);
    this.props.onReceiveCoordinates([e.pageX, e.pageY]);
  }
  
  
  render() {
    return <button onClick={this.handleClick}>Cood</button>
  }
}

export default CoordinatesButton;