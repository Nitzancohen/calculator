import React, { Component } from 'react';
import Button from './Button';

class Operator extends Component {
    operators = [
        { op: '+', opFunction: (a,b) => a+b },
        { op: '-', opFunction: (a,b) => a-b },
        { op: '*', opFunction: (a,b) => a*b },
        { op: '/', opFunction: (a,b) => a/b }
    ]

    render() {
        return (
            this.operators.map(o => <Button value={o.op} />)
        );
    }
}

export default Operator;