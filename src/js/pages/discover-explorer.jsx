import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Well, Input, Panel } from 'react-bootstrap';

import css from '../../css/discover-explorer.css';

import { discoverCardFilters, getDiscoverCardFilter } from '../modules/discover-card-filters.js';
import initCardData from '../modules/card-data.js';

import CardPool from '../components/card-pool.jsx';
import DiscoverSummary from '../components/discover-summary.jsx';


class DiscoverExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      discoverCard: {},
      heroClass: "",
      discoverCardList: [],
      explorerCardList: [],
      showExplorer: false
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
      explorerCardList: _.cloneDeep(_.filter(this.state.data, getDiscoverCardFilter(discoverCard, discoverCard.playerClass)))
    });
  }

  handleHeroChange(e) {
    this.setState({
      heroClass: e.target.value,
      explorerCardList: _.cloneDeep(_.filter(this.state.data, getDiscoverCardFilter(this.state.discoverCard, e.target.value)))
    });
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12} md={4}>
            <Panel header="Discover Filter" bsStyle="primary">
              <div className="hero-select">
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
              </div>
              <CardPool list={ this.state.discoverCardList }
                        handleSelection={ this.handleDiscoverSelection.bind(this) } />
            </Panel>
          </Col>
          <Col xs={12} md={8}>
            <Panel header="Discover Summary" bsStyle="success">
              <DiscoverSummary explorerCardList={ this.state.explorerCardList }
                               heroClass={ this.state.heroClass }
                               discoverCard={ this.state.discoverCard } />
            </Panel>
            <Panel collapsible expanded={ this.state.showExplorer }
                   onSelect={ (function(){ this.setState({showExplorer: !this.state.showExplorer}); }).bind(this) }
                   header="Card Explorer (Bandwidth warning: it loads a lot of card images, open with caution on mobile network)"
                   bsStyle="warning"
            >
              {
                (function() {
                  if (this.state.showExplorer) {
                    return (<CardPool list={ this.state.explorerCardList }
                                      handleSelection={ function() { return; } } />);
                  } else {
                    return (<div></div>);
                  }
                }).apply(this)
              }

            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DiscoverExplorer;
