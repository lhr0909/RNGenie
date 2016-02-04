/**
 * PewPewSimulator Core Module
 * this module contains the logic needed to simulate pew-pew's
 * Author: Simon Liang (lhr0909@)
 * Date: Feb 4, 2016
 */

import deepcopy from 'deepcopy';

function* simulatePewPews(shots, damagePerShot, targets) {
  if (shots <= 0) {
    yield targets;
  } else {
    // depth first search for each shot
    for (var i = 0; i < targets.length; i++) {
      let newTargets = deepcopy(targets);
      if (newTargets[i].health <= 0) {
        continue;
      } else {
        newTargets[i].health -= damagePerShot;
        yield* simulatePewPews(shots - 1, damagePerShot, newTargets);
      }
    }
  }
}

export default simulatePewPews;
