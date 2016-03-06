import _ from 'lodash';

export function getDiscoverSummary(cardList, heroClass) {
  if (_.isEmpty(cardList)) {
    return {
      message: "Please select a discover card from below."
    };
  }

  if (_.isEmpty(heroClass)) {
    return {
      message: "Please select a hero class from above."
    };
  }

  let classCardCount = 0;
  let neutralCardCount = 0;
  _.forEach(cardList, function(card) {
    if (card.playerClass) {
      classCardCount++;
    } else {
      neutralCardCount++;
    }
  });

  return {
    classCardCount,
    neutralCardCount
  };
};
