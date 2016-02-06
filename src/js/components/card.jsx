import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
      chosen: false
    };
  }

  getCardImageURL(cardId) {
    if (this.state.chosen) {
      return `http://wow.zamimg.com/images/hearthstone/cards/enus/animated/${cardId}_premium.gif`;
    }
    return `http://wow.zamimg.com/images/hearthstone/cards/enus/original/${cardId}.png`;
  }

  onHover() {
    this.setState({
      chosen: true
    });
  }

  offHover() {
    this.setState({
      chosen: false
    });
  }

  render() {
    return (
        <div className="card" onMouseOver={this.onHover.bind(this)} onMouseOut={this.offHover.bind(this)}>
          <img className="card-image" src={this.getCardImageURL(this.state.info.id)} />
        </div>
    );
  }
}

export default Card;
