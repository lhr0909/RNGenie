var React = require('react');

var CardSelector = require('./components/CardSelector.js');

React.render(
    <div>
        <h1>RNGenie</h1>
        <CardSelector />
    </div>,
    document.getElementById('react-mount-point')
);
