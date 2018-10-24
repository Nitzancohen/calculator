import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen'
import { observer, inject } from 'mobx-react';
import Buttons from './components/Buttons';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

export default App;
