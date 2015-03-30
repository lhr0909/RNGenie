var React = require('react');
var data = require('../modules/card-data.js');
var _ = require('lodash');

var autoComplete = React.createClass({
    getInitialState: function() {
        return {text: "", list: []};
    },
    handleChange: function(event) {
        this.state.list = _.filter(data, function(x) {
            x.name === event.target.value;
        });
    },
    render: function() {
        return(<input type="text" onChange={this.handleChange} />);
    };
});

module.exports = autoComplete;
