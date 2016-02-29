import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import discoverCardFilters from '../modules/discover-card-filters.js';
import CardPool from '../components/card-pool.jsx';

import initCardData from '../modules/card-data.js';

class DiscoverExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      discoverCardList: [],
      explorerCardList: []
    };
  }

  componentDidMount() {
    let self = this;
    initCardData(function(data) {
      self.setState({
        data: data,
        discoverCardList: _.filter(data, function(card) {
          return !!discoverCardFilters[card.id];
        }),
        explorerCardList: []
      });
    });
  }

  handleDiscoverSelection(cardId) {
    this.setState({
      explorerCardList: _.filter(this.state.data, discoverCardFilters[cardId])
    });
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>Discover Cards Here</Col>
        </Row>
        <Row>
          <Col md={4} className="card-tray">
            <CardPool list={ this.state.discoverCardList }
                      handleSelection={ this.handleDiscoverSelection.bind(this) } />
          </Col>
          <Col md={8}>
            <CardPool list={ this.state.explorerCardList } />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DiscoverExplorer;
