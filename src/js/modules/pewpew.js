/**
 * PewPewSimulator Core Module
 * this module contains the logic needed to simulate pew-pew's
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 4, 2016
 */

import _ from 'lodash';

function* getNewOutcomeInstance(damagePerShot, targets) {
  // depth first search for each shot
  for (var i = 0; i < targets.length; i++) {
    let newTargets = _.cloneDeep(targets);
    if (newTargets[i].health > 0) {
      newTargets[i].health -= damagePerShot;
      yield newTargets;
    }
  }
}

function* simulatePewPews(shots, damagePerShot, targets) {
  if (shots <= 0) {
    yield targets;
  } else {
    for (var newTargets of getNewOutcomeInstance(damagePerShot, targets)) {
      yield* simulatePewPews(shots - 1, damagePerShot, newTargets);
    }
  }
}

function analyzePewPews(shots, damagePerShot, targets) {
  let count = 0;
  let killCounts = [0, 0, 0];
  for (var outcome of simulatePewPews(shots, damagePerShot, _.cloneDeep(targets))) {
    console.log(outcome);
    count++;
  }
  console.log(count);
}

export { analyzePewPews };
