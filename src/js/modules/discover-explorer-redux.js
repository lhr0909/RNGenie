import { createStore } from 'redux';

import discoverCardFilters from './discover-card-filters.js';
import initCardData from './card-data.js';

//================ actions ================
const ACTIONS = {
  UPDATE_CARD_POOL: "UPDATE_CARD_POOL"
};

let actionCreators = {
  showCardPool: (heroClass, discoverCard) => {
    return {
      type: ACTIONS.UPDATE_CARD_POOL,
      heroClass: heroClass,
      discoverCard: discoverCard
    };
  }
};

export actionCreators;

//================= reducers =================

const initialState = {
  data: [],
  discoverCardList: [],
  explorerCardList: []
};

function discoverExplorerReducers(state = initialState, action) {
  return state;
}

//================= store ==================

export function getDiscoverExplorerStore() {
  return createStore(discoverExplorerReducers);
};
