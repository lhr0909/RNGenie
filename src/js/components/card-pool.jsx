import React from 'react';
import _ from 'lodash';

import css from '../../css/card-pool.css';

import Card from './card.jsx';


class CardPool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleSelection: this.props.handleSelection,
      cardList: this.props.list
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cardList: nextProps.list
    });
  }

  handleCardSelection(card) {
    this.state.handleSelection(card);
  }

  render() {
    let self = this;
    return (
      <div className="card-pool">
          <ul className="card-list">
              {
                  _.map(
                    _.orderBy(
                      self.state.cardList,
                      ['playerClass', 'cost', 'name'],
                      ['asc', 'asc', 'asc']
                    ), function(card) {
                      return (
                          <li key={card.id}
                              className="card-item"
                              onClick={ self.handleCardSelection.bind(self, card) }>
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
