var React = require('react');

var CardSelector = require('./components/CardSelector.js');

React.render(
    <div className="container-fluid">
        <div className="col-md-6">
            <CardSelector
             description="Search Collectible Minions By Name: "
             precondition={function(x) {
                return (x.type === "Minion") && (x.collectible);
            }} />
        </div>
        <div className="col-md-6">
            <CardSelector
             description="Search Collectible Spells By Name: "
             precondition={function(x) {
                return (x.type === "Spell") && (x.collectible);
            }} />
        </div>
    </div>,
    document.getElementById('react-mount-point')
);
