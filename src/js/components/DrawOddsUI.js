var React = require('react');
var data = require('../modules/drawOdds.js');
var math = require('mathjs');

var Card = require('./Card.js');

var DrawOddsUI = React.createClass({
    getInitialState: function() {
        return {'cardsInDeck': 18,
                 'targetsInDeck' : 3,
                  'cardsToDraw': 4
                };
    },
    // TODO: Validate inputs
    onChangeCardsInDeck: function(e) {
        this.setState({cardsInDeck: e.target.value});
    },
    onChangeTargetsInDeck: function(e) {
        this.setState({targetsInDeck: e.target.value});
    },
    onChangeCardsToDraw: function(e) {
        this.setState({cardsToDraw: e.target.value});
    },
    render: function() {
        return(
            <div>
            <input onChange={this.onChangeCardsInDeck} defaultValue={this.state.cardsInDeck} /> cards remain<br />
            <input onChange={this.onChangeTargetsInDeck} defaultValue={this.state.targetsInDeck} /> success cards remain<br />
            <input onChange={this.onChangeCardsToDraw} defaultValue={this.state.cardsToDraw} /> cards will be drawn<br />
            {
                data['drawOdds'](this.state.cardsInDeck, this.state.targetsInDeck, this.state.cardsToDraw).map(function (data, index) {
                    return (
                        < div > <b>{index} draws:</b> {math.round(data * 100, 2) || '< 0.01'}% < / div >
                    );
                })
            }
            </div>
        );
    }
});

module.exports = DrawOddsUI;