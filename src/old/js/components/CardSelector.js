var React = require('react');
var data = require('../modules/card-data.js');
var _ = require('lodash');

var Card = require('./Card.js');

var CardSelector = React.createClass({
    getInitialState: function() {
        return {text: "", cardList: []};
    },
    handleChange: function(event) {
        var self = this;
        self.setState({
            cardList: _.filter(data, function(x) {
                var nameHasText = x.name.toLowerCase().indexOf(event.target.value) > -1;
                return nameHasText && self.props.precondition(x);
            })
        });
    },
    render: function() {
        return(
            <div className="card-selector">
                <span>{this.props.description}</span>
                <input type="text" onChange={this.handleChange} />
                <ul className="card-list">
                    {
                        this.state.cardList.map(function(card) {
                            return (
                                <li key={card.id} className="card-item">
                                    <Card info={card} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = CardSelector;
