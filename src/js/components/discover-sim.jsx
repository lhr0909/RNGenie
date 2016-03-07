import React from 'react';
import _ from 'lodash';
import { Row, Col, Button } from 'react-bootstrap';

import CardPool from './card-pool.jsx';

class DiscoverSimulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: this.props.cardList
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cardList: nextProps.cardList
    });
  }

  render() {
    if (_.isEmpty(this.state.cardList)) {
      return <div></div>;
    }
    return (
        <Row className="discover-sim">
          <Col xs={6}>
            <Button bsStyle="primary">Start Simulation</Button>
          </Col>
          <Col xs={6}>
            <CardPool cardList={ [] } />
          </Col>
        </Row>
    );
  }
}

export default DiscoverSimulator;
