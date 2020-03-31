// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  retCoords = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.retCoords}></button>;
  }
}

export default CoordinatesButton