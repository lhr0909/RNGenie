import React from 'react';
import css from '../../css/card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      info: nextProps.info
    });
  }

  getCardImageURL() {
    if (this.state.info.selected) {
      return `http://wow.zamimg.com/images/hearthstone/cards/enus/animated/${this.state.info.id}_premium.gif`;
    }
    return `http://wow.zamimg.com/images/hearthstone/cards/enus/original/${this.state.info.id}.png`;
  }

  render() {
    return (
        <div className="card">
          <img className="card-image" src={this.getCardImageURL()} />
        </div>
    );
  }
}

export default Card;
