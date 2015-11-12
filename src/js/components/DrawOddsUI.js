var React = require('react');
var data = require('../modules/drawOdds.js');
var math = require('mathjs');

var Card = require('./Card.js');

var DrawOddsUI = React.createClass({
    render: function() {
        return(
            <div>
            <b>15</b> cards remain, <b>2</b> are success conditions, <b>4</b> cards are to be drawn<br />

            {
                data['drawOdds'](15, 2, 4).map(function (data, index) {
                    return (
                        < div > <b>{index} draws:</b> {math.round(data * 100, 1)}% < / div >
                    );
                })
            }
            </div>
        );
    }
});

module.exports = DrawOddsUI;