export const discoverCardFilters = {
  'LOE_003': function etheralConjurer(x) {
    return x.collectible && x.type === "SPELL";
  },
  'LOE_006': function museumCurator(x) {
    return x.collectible && x.mechanics && x.mechanics.indexOf('DEATHRATTLE') > -1;
  },
  'LOE_023': function darkPeddler(x) {
    return x.collectible && x.cost == 1;
  },
  'LOE_029': function jeweledScarab(x) {
    return x.collectible && x.cost == 3;
  },
  'LOE_039': function gorillaBotA3(x) {
    return x.collectible && x.race === 'MECHANICAL';
  },
  'LOE_047': function tombSpider(x) {
    return x.collectible && x.race === 'BEAST';
  },
  'LOE_076': function sirFinleyMrrrgglton(x) {
    return x.type === "HERO_POWER" && x.set === "CORE";
  },
  'LOE_092': function archThiefRafaam(x) {
    return (x.type !== "ENCHANTMENT") && (x.name === "Mirror of Doom" || x.name === "Lantern of Power" || x.name === "Timepiece of Horror");
  },
  'LOE_115a': function ravenIdolMinions(x) {
    return x.collectible && x.type === "MINION";
  },
  'LOE_115b': function ravenIdolSpells(x) {
    return x.collectible && x.type === "SPELL";
  }
};

export function getDiscoverCardFilter(cardId, heroClass) {
  return function(card) {
    return discoverCardFilters[cardId](card) &&
           ( _.isEmpty(heroClass) ? true : ((card.playerClass === heroClass) || (card.playerClass === undefined)) );
  };
};
