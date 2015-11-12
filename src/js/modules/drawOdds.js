var math = require('mathjs');
var myData = { };

/***
 * Given a deck state, calculate a range of odds
 * @param cardsInDeck How many cards remain in the deck
 * @param targetCardsInDeck How many cards in the deck represent a success
 * @param cardsToDraw How many cards to draw
 * @returns {Array} An array of probabilities, where the nth index represents the probability of exactly n successes
 */
var oddsOfSuccess = function(cardsInDeck, targetCardsInDeck, cardsToDraw) {
    var odds = [];
    // Less than or equal to intentional
    // This is simpler than programming the cumulative distribution function.  For small values, it should be fine
    for (var i = 0; i <= Math.min(cardsInDeck, targetCardsInDeck, cardsToDraw); i++) {
        odds.push(oddsOfNSuccesses(cardsInDeck, targetCardsInDeck, cardsToDraw, i));
    }
    return odds;
}

/**
 * Calculate the odds of N successes.  Equal to the probability mass function of a hypergeometric distribution
 * @param cardsInDeck How many cards remain in the deck
 * @param targetCardsInDeck How many cards in the deck represent a success
 * @param cardsToDraw How many cards to draw
 * @param targetCardsToDraw How many successes you wish to draw
 * @returns {number} The probability of exactly {targetCardsDrawn} successes
 */
var oddsOfNSuccesses = function(cardsInDeck, targetCardsInDeck, cardsToDraw, targetCardsToDraw) {
    // K = success in deck
    // k = how many to draw
    // N = deck size
    // n = draws
    var n1 = math.combinations(targetCardsInDeck, targetCardsToDraw);
    var n2 = math.combinations((cardsInDeck - targetCardsInDeck), (cardsToDraw - targetCardsToDraw));
    var d1 = math.combinations(cardsInDeck, cardsToDraw);
    return (n1 * n2) / d1;
}

myData['drawOdds'] = oddsOfSuccess;

module.exports = myData;