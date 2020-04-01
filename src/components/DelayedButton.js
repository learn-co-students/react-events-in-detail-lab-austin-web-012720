// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    delay = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }

    render() {
        return (
            <div>
                <button onClick={this.delay}>Delay Button</button>
            </div>
        )
    }
}
