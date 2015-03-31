var React = require('react');

var Card = React.createClass({
    getInitialState: function() {
        return {info: this.props.info};
    },
    getCardTextHTML: function() {
        var text = this.state.info.text;
        if (text) {
            return {__html: text.toString()};
        } else{
            return {__html: ""};
        }
    },
    render: function() {
        return (
            <div className="card">
                <span className="card-name">{this.state.info.name}</span>
                <span className="card-cost">{this.state.info.cost}</span>
                <span className="card-attack">{this.state.info.attack}</span>
                <span className="card-health">
                    {this.state.info.health || this.state.info.durability}
                </span>
                <span className="card-race">{this.state.info.race}</span>
                <span className="card-text" dangerouslySetInnerHTML={this.getCardTextHTML()} />
            </div>
        );
    }
});

module.exports = Card;
