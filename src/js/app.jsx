/**
 * Main App
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 1, 2016
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RNGNav from './components/rng-nav.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';

import PewPewSimulator from './pages/pew-pew-sim.jsx';
import DiscoverExplorer from './pages/discover-explorer.jsx';

'use strict';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={DiscoverExplorer}>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<RNGNav />, document.getElementById("rng-nav"));
ReactDOM.render(<App />, document.getElementById("rng-mount-point"));
