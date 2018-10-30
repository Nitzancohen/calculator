import React, { Component } from 'react';
import Button from './Button';
import { inject } from 'mobx-react';

@inject('store')
class Number extends Component {    
    addNumber = (value) => {
        this.props.store.addNumber(value)
    }

    render() {
        return (
            <Button value={this.props.value} func={this.addNumber} styleClass="button number" />
        );
    }
}

export default Number;