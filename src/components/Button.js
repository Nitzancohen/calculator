import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>{this.props.value}</div>
        );
    }
}

export default Button;