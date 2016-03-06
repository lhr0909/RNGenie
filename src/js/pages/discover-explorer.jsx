import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Well, Input } from 'react-bootstrap';

import { discoverCardFilters, getDiscoverCardFilter } from '../modules/discover-card-filters.js';
import initCardData from '../modules/card-data.js';

import CardPool from '../components/card-pool.jsx';


class DiscoverExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      discoverCard: {},
      heroClass: "",
      discoverCardList: [],
      explorerCardList: []
    };
  }

  componentDidMount() {
    let self = this;
    initCardData(function(data) {
      self.setState({
        data: data,
        discoverCardList: _.cloneDeep(_.filter(data, function(card) {
          return !!discoverCardFilters[card.id];
        })),
        explorerCardList: []
      });
    });
  }

  handleDiscoverSelection(discoverCard) {
    this.setState({
      discoverCard: discoverCard,
      heroClass: discoverCard.playerClass || "",
      discoverCardList: _.cloneDeep(_.map(this.state.discoverCardList, function(card) {
        return _.assign({}, card, {
          selected: card.id === discoverCard.id
        });
      })),
      explorerCardList: _.cloneDeep(_.filter(this.state.data, getDiscoverCardFilter(discoverCard.id, discoverCard.playerClass)))
    });
  }

  handleHeroChange(e) {
    this.setState({
      heroClass: e.target.value,
      explorerCardList: _.cloneDeep(_.filter(this.state.data, getDiscoverCardFilter(this.state.discoverCard.id, e.target.value)))
    });
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <Input type="select"
                   label="Select Hero Class"
                   value={this.state.heroClass}
                   placeholder=""
                   onChange={ this.handleHeroChange.bind(this) }
            >
              <option value="">(Choose a class)</option>
              <option value="DRUID">Druid</option>
              <option value="HUNTER">Hunter</option>
              <option value="MAGE">Mage</option>
              <option value="PALADIN">Paladin</option>
              <option value="PRIEST">Priest</option>
              <option value="ROGUE">Rogue</option>
              <option value="SHAMAN">Shaman</option>
              <option value="WARLOCK">Warlock</option>
              <option value="WARRIOR">Warrior</option>
            </Input>
          </Col>
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
