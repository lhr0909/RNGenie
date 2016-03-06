import React from 'react';

import { getDiscoverSummary } from '../modules/discover-calc.js';

class DiscoverSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      explorerCardList: this.props.explorerCardList,
      heroClass: this.props.heroClass,
      discoverCard: this.props.discoverCard,
      summary: getDiscoverSummary(this.props.explorerCardList, this.props.heroClass)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      explorerCardList: nextProps.explorerCardList,
      heroClass: nextProps.heroClass,
      discoverCard: nextProps.discoverCard,
      summary: getDiscoverSummary(nextProps.explorerCardList, nextProps.heroClass)
    });
  }

  render() {
    let detailedSummary = (!!this.state.summary.classCardCount) ? (
      <div>
        <p className="">There are {this.state.summary.classCardCount || 0} class cards. </p>
        <p className="">There are {this.state.summary.neutralCardCount || 0} neutral cards. </p>
        <p className="">Odds of getting a specific neutral card is {(this.state.summary.oddsAtLeastOneNeutralCard || 0) * 100}%. </p>
      </div>
    ) : (<div></div>);

    return (
        <div className="discover-summary">
          <p className="">{ this.state.summary.message || "" }</p>
          { detailedSummary }
        </div>
    );
  }
}

export default DiscoverSummary;
