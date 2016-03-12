import React from 'react';

import { getDiscoverSummary } from '../modules/discover-calc.js';
import DiscoverSimulator from './discover-sim.jsx';

class DiscoverSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      explorerCardList: this.props.explorerCardList,
      heroClass: this.props.heroClass,
      discoverCard: this.props.discoverCard,
      summary: getDiscoverSummary(this.props.explorerCardList, this.props.heroClass, this.props.onError)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      explorerCardList: nextProps.explorerCardList,
      heroClass: nextProps.heroClass,
      discoverCard: nextProps.discoverCard,
      summary: getDiscoverSummary(nextProps.explorerCardList, nextProps.heroClass, this.props.onError)
    });
  }

  render() {
    let isDetailedSummary = !!this.state.summary.classCardCount || !!this.state.summary.neutralCardCount;

    let detailedSummary = (isDetailedSummary) ? (
      <div className="discover-summary">
        <h4 className="discover-summary-subtitle">When you play { this.state.discoverCard.name }:</h4>
        <p className="discover-summary-message">
          There are {this.state.summary.classCardCount || 0} class cards and&nbsp;
          {this.state.summary.neutralCardCount || 0} neutral cards to discover from.
        </p>
        <p className="discover-summary-message">
          There is a&nbsp;
          { Math.round(this.state.summary.probability.classCardProbability * 10000) / 100 || 0 }%
          chance to get a specific class card.
        </p>
        <p className="discover-summary-message">
          There is a&nbsp;
          { Math.round(this.state.summary.probability.neutralCardProbability * 10000) / 100 || 0 }%
          chance to get a specific neutral card.
        </p>
      </div>
    ) : (<div className="hidden"></div>);

    return detailedSummary;
  }
}

export default DiscoverSummary;
