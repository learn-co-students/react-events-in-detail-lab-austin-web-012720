import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClickEvent = event => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
  };

  render() {
    return <button onClick={this.handleClickEvent} >CoordinatesButton</button>;
  }
}

export default CoordinatesButton;
