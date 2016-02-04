/**
 * Pew-pew Simulator Page
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 3, 2016
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

'use strict';

class PewPewSimulator extends React.Component {
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
