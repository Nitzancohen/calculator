import React, { Component } from 'react';
import '../App.css'

class Button extends Component {
    func = () => this.props.func(this.props.value)
    
    render() {
        return (
            <div className={this.props.styleClass} onClick={this.func}>{this.props.value}</div>
        );
    }
}

export default Button;