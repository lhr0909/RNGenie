/**
 * Navigation Bar Component
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 3, 2016
 */

import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Glyphicon } from 'react-bootstrap';

import css from '../../css/rng-nav.css';

'use strict';

class RNGNav extends React.Component {
  render() {
    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">RNGenie</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Discover</NavItem>
            <NavItem eventKey={1} href="#">More Features Coming Soon™</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://www.paypal.me/lhr0909">Buy me a Beer</NavItem>
            <NavDropdown eventKey={2} title="About" id="acknowledgements-dropdown">
              <MenuItem eventKey={2.1} href="http://www.divby0.io">Made with <Glyphicon className="with-love" glyph="heart" /> by Simon</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.2} href="https://hearthstonejson.com/">Data from HearthstoneJSON</MenuItem>
              <MenuItem eventKey={2.3} href="http://www.hearthhead.com/">Card Images from Hearthhead</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default RNGNav;
