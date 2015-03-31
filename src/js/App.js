var React = require('react');

var CardSelector = require('./components/CardSelector.js');

React.render(
    <div>
        <h1>RNGenie</h1>
        <CardSelector
         description="Search Collectible Minions By Name: "
         precondition={function(x) {
            return (x.type === "Minion") && (x.collectible);
        }} />
        <CardSelector
         description="Search Collectible Spells By Name: "
         precondition={function(x) {
            return (x.type === "Spell") && (x.collectible);
        }} />
    </div>,
    document.getElementById('react-mount-point')
);
