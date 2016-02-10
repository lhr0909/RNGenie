/**
 * Pew-pew Simulator Page
 * more
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 3, 2016
 */

import React from 'react';
import { analyzePewPews } from '../modules/pewpew.js';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';

'use strict';

class PewPewSimulator extends React.Component {
  constructor() {
    super();
    let targets = [
      {health: 5},
      {health: 2},
      {health: 2}
    ];
    let analysis = analyzePewPews(3, 1, targets);
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
