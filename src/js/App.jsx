/**
 * Main App
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 1, 2016
 */

import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<App/>, document.getElementById("mount-point"));
