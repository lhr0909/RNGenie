import _ from 'lodash';

function getProbability(classCardCount, neutralCardCount) {
  let totalClassCardInstance = classCardCount * 4;
  let totalCardInstance = totalClassCardInstance + neutralCardCount;
  let oddsOfDrawingOneClassCard = 4 / totalCardInstance;
  let oddsOfDrawingOneNeutralCard = 1 / totalCardInstance;

  var recurseParamsClassCard = {
    probability : 1.00,
    numDesiredClassCards : 1,
    numDesiredNeutralCards : 0,
    numUndesiredClassCards : classCardCount - 1,
    numUndesiredNeutralCards : neutralCardCount,
    level: 0
  };

  var recurseParamsNeutralCard = {
    probability : 1.00,
    numDesiredClassCards : 0,
    numDesiredNeutralCards : 1,
    numUndesiredClassCards : classCardCount,
    numUndesiredNeutralCards : neutralCardCount - 1,
    level: 0
  };

  return {
    classCardProbability: recurse(recurseParamsClassCard),
    neutralCardProbability: recurse(recurseParamsNeutralCard)
  };
}

function getTotalCardInstanceCount(recurseParams) {
  let {
    probability,
    numDesiredClassCards,
    numDesiredNeutralCards,
    numUndesiredClassCards,
    numUndesiredNeutralCards
  } = recurseParams;
  return 4 * numDesiredClassCards + 4 * numUndesiredClassCards +
         numDesiredNeutralCards + numUndesiredNeutralCards;
}

function recurse(recurseParams) {
  let {
    probability,
    numDesiredClassCards,
    numDesiredNeutralCards,
    numUndesiredClassCards,
    numUndesiredNeutralCards,
    level
  } = recurseParams;

  if (numDesiredClassCards === 0 && numDesiredNeutralCards === 0) {
    return probability;
  }

  if (level >= 3 ||
      numDesiredClassCards < 0 ||
      numUndesiredClassCards < 0 ||
      numDesiredNeutralCards < 0 ||
      numUndesiredNeutralCards < 0 ||
      probability === 0
  ) {
    return 0;
  }

  let totalCardInstance = getTotalCardInstanceCount(recurseParams);

  let probabilityDesiredClassCard = probability * 4 * numDesiredClassCards / totalCardInstance;

  let probabilityUndesiredClassCard = probability * 4 * numUndesiredClassCards / totalCardInstance;

  let probabilityDesiredNeutralCard = probability * numDesiredNeutralCards / totalCardInstance;

  let probabilityUndesiredNeutralCard = probability * numUndesiredNeutralCards / totalCardInstance;

  return recurse({
    probability : probabilityDesiredClassCard,
    numDesiredClassCards : numDesiredClassCards - 1,
    numDesiredNeutralCards : numDesiredNeutralCards,
    numUndesiredClassCards : numUndesiredClassCards,
    numUndesiredNeutralCards : numUndesiredNeutralCards,
    level: level + 1
  }) + recurse({
    probability : probabilityUndesiredClassCard,
    numDesiredClassCards : numDesiredClassCards,
    numDesiredNeutralCards : numDesiredNeutralCards,
    numUndesiredClassCards : numUndesiredClassCards - 1,
    numUndesiredNeutralCards : numUndesiredNeutralCards,
    level: level + 1
  }) + recurse({
    probability : probabilityDesiredNeutralCard,
    numDesiredClassCards : numDesiredClassCards,
    numDesiredNeutralCards : numDesiredNeutralCards - 1,
    numUndesiredClassCards : numUndesiredClassCards,
    numUndesiredNeutralCards : numUndesiredNeutralCards,
    level: level + 1
  }) + recurse({
    probability : probabilityUndesiredNeutralCard,
    numDesiredClassCards : numDesiredClassCards,
    numDesiredNeutralCards : numDesiredNeutralCards,
    numUndesiredClassCards : numUndesiredClassCards,
    numUndesiredNeutralCards : numUndesiredNeutralCards - 1,
    level: level + 1
  });

}

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

  let probability = getProbability(classCardCount, neutralCardCount);

  return {
    classCardCount,
    neutralCardCount,
    probability
  };
};
