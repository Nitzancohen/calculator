import React, { Component } from 'react';

class Number extends Component {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    render() {
        return (
            this.numbers.map(n => <Button value={n} />)
        );
    }
}

export default Number;