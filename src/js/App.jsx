/**
 * Main App
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 1, 2016
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RNGNav from './components/rng-nav.jsx';
import PewPewSimulator from './pages/pew-pew-sim.jsx';

'use strict';

class App extends React.Component {
  render() {
    return (
      <div>
        <RNGNav />
        <PewPewSimulator />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("mount-point"));
