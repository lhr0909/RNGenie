var React = require('react');
var data = require('../modules/card-data.js');
var _ = require('lodash');

var Card = require('./Card.js');

var MinionManaSelector = React.createClass({
    getInitialState: function() {
        return {mana: 0, cardList: []};
    },
    handleManaChange: function(cost) {
        var self = this;
        self.setState({
            cardList: _.filter(data, function(x) {
                return (x.type === "Minion") && (x.cost === 1) && (x.collectible);
            })
        });
    },
    render: function() {
        return(
            <div className="minion-mana-select">
                <ul className="pagination">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 20].map(function(manaCost) {
                        return (<li><a>{manaCost}</a></li>);
                    })
                }
                </ul>
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

module.exports = MinionManaSelector;
