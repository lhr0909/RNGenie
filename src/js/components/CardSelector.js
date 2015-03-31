var React = require('react');
var data = require('../modules/card-data.js');
var _ = require('lodash');

var CardSelector = React.createClass({
    getInitialState: function() {
        return {text: "", cardList: []};
    },
    handleChange: function(event) {
        this.setState({
            cardList: _.filter(data, function(x) {
                return x.name.toLowerCase().indexOf(event.target.value) > -1;
            })
        });
    },
    render: function() {
        return(
            <div className="card-selector">
                <input type="text" onChange={this.handleChange} />
                <ul>
                    {
                        this.state.cardList.map(function(card) {
                            return (
                                <li>{card.name}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = CardSelector;
