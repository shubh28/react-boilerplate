import Test from './test';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
        <div>
            <p> Hello Shubham!</p>
            <Test/>
        </div>
        );
  }
}

render(<App/>, document.getElementById('app'));