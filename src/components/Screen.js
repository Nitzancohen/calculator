import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Screen extends Component {
    render() {
        return (
            <div>{this.props.store.displayValue}</div>
        );
    }
}

export default Screen;