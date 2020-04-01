// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    createArray = event => {
        const array = [
            this.props.onReceiveCoordinates([
                event.clientX,
                event.clientY
            ])
        ];
        console.log(array);
    }

    render() {
        return (
            <div>
                <button onClick = {this.createArray}>
                Coordinate Button
                </button>
            </div>
        )
    }
}