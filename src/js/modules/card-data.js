var _ = require('lodash');

var cards = require('./cards.js');

var finalData = [];

_.forEach(cards, function(value, key) {
    // Filter out stuff that we don't care
    // TODO: Add Blackrock Mountain
    if ((key === "Basic") ||
        (key === "Classic") ||
        (key === "Reward") ||
        (key === "Promotion") ||
        (key === "Curse of Naxxramas") ||
        (key === "Goblins vs Gnomes")) {

        _.forEach(value, function(card) {
            if ((card.type !== "Enchantment") &&
                (card.type !== "Hero Power") &&
                (card.type !== "Hero")) {

                finalData.push(card);

            } else {
                console.log(card);
            }
        });

    } else {
        console.log(value);
    }
});

module.exports = finalData;
