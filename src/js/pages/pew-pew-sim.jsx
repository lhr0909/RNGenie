/**
 * Pew-pew Simulator Page
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 3, 2016
 */

import React from 'react';
import simulatePewPews from '../modules/pewpew.js';
import { Grid, Row, Col } from 'react-bootstrap';

'use strict';

class PewPewSimulator extends React.Component {
  constructor() {
    super();
    let targets = [];
    targets.push({health: 5});
    targets.push({health: 2});
    targets.push({health: 2});
    for (var outcome of simulatePewPews(3, 1, targets)) {
      console.log(outcome);
    }
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <h1>Hello World!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p>Yo</p>
          </Col>
          <Col xs={6}>
            <p>Sup</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PewPewSimulator;
