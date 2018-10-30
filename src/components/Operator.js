import React, { Component } from 'react';
import Button from './Button';
import { inject } from 'mobx-react';

@inject('store')
class Operator extends Component {
    changeOperator = (value) => {
        this.props.store.changeOperator(value);        
    }

    render() {
        return (
            <Button value={this.props.value} styleClass="button operator" func={this.changeOperator} />
        );
    }
}

export default Operator;