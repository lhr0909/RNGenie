var React = require('react');

var Card = React.createClass({
    getInitialState: function() {
        return {info: this.props.info};
    },
    getCardTextHTML: function() {
        var text = this.state.info.text;
        if (text) {
            return {__html: text.toString()};
        } else {
            return {__html: ""};
        }
    },
    render: function() {
        return (
            <div className="card">
                <div className="card-name">{this.state.info.name}</div>
                <span className="card-cost">{this.state.info.cost}</span>
                <span className="card-attack">{this.state.info.attack}</span>
                <span className="card-health">
                    {this.state.info.health || this.state.info.durability}
                </span>
                <div className="card-text" dangerouslySetInnerHTML={this.getCardTextHTML()} />
                <div className="card-race">{this.state.info.race}</div>
            </div>
        );
    }
});

module.exports = Card;
