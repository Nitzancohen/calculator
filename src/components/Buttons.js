import React, { Component } from 'react';
import Number from './Number';
import Operator from './Operator';

class Buttons extends Component {
    render() {
        return (
            <div className='buttons'>
                <Number value={7} />
                <Number value={8} />
                <Number value={9} />
                <Operator value={'/'} />
                <Number value={4} />
                <Number value={5} />
                <Number value={6} />
                <Operator value={'*'} />
                <Number value={1} />
                <Number value={2} />
                <Number value={3} />
                <Operator value={'-'} />
                <Operator value={'AC'} />
                <Number value={0} />
                <Operator value={'='} />
                <Operator value={'+'} />
            </div>
        );
    }
}

export default Buttons;