import React from 'react';
import _ from 'lodash';

import css from '../../css/card-pool.css';

import initCardData from '../modules/card-data.js';
import Card from './card.jsx';

class CardPool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectibleOnly: props.collectibleOnly,
      precondition: props.precondition,
      handleSelection: props.handleSelection,
      data: [],
      cardList: []
    };
  }

  componentDidMount() {
    let self = this;
    initCardData(function(data) {
      self.setState({
        data: data,
        cardList: self.getNewCardList(data, self.state.precondition)
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      precondition: nextProps.precondition,
      cardList: this.getNewCardList(this.state.data, nextProps.precondition)
    });
  }

  handleCardSelection(id) {
    this.state.handleSelection(id);
  }

  getNewCardList(data, precondition) {
    let self = this;
    return _.filter(data, function(x) {
      return precondition(x) && ((self.state.collectibleOnly) ? x.collectible : true);
    });
  }

  render() {
    let self = this;
    return (
      <div className="card-pool">
          <ul className="card-list">
              {
                  self.state.cardList.map(function(card) {
                      return (
                          <li key={card.id}
                              className="card-item"
                              onClick={ self.handleCardSelection.bind(self, card.id) }>
                              <Card info={card} />
                          </li>
                      );
                  })
              }
          </ul>
      </div>
    );
  }
}

export default CardPool;
