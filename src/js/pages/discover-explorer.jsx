import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import discoverCardFilters from '../modules/discover-card-filters.js';
import CardPool from '../components/card-pool.jsx';

class DiscoverExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverFilter: (x) => {
        return _.reduce(Object.keys(discoverCardFilters), function(condition, discoverCardId) {
          return condition || x.id === discoverCardId;
        }, false);
      },
      explorerFilter: (x) => { return false; }
    };
  }

  handleDiscoverSelection(cardId) {
    this.setState({
      explorerFilter: discoverCardFilters[cardId]
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
            <CardPool collectibleOnly={false}
                      precondition={ this.state.discoverFilter }
                      handleSelection= { this.handleDiscoverSelection.bind(this) } />
          </Col>
          <Col md={8}>
            <CardPool collectibleOnly={false}
                      precondition={ this.state.explorerFilter } />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DiscoverExplorer;
