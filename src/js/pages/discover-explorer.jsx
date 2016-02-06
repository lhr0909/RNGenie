import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import discoverCardFilters from '../modules/discover-card-filters.js';
import CardPool from '../components/card-pool.jsx';

class DiscoverExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverFilter: (x) => { return x.text && x.text.indexOf("Discover</b>") > -1; },
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
          <CardPool collectibleOnly={true}
                    precondition={ this.state.discoverFilter }
                    handleSelection= { this.handleDiscoverSelection.bind(this) } />
        </Row>
        <Row>
          <CardPool collectibleOnly={false}
                    precondition={ this.state.explorerFilter } />
        </Row>
      </Grid>
    );
  }
}

export default DiscoverExplorer;
