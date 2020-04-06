// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {


    handleClick = (e) => {
        let array = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(array)
    }
    render() {
        return (
            <button onClick={this.handleClick}>Click Me!</button>
        )

    }
}
export default CoordinatesButton;