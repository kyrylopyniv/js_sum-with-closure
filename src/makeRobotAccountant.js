'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  if (count > 3 && count % 2 === 0) {
    return 'Bzzz... Error!';
  }

  return function(x) {
    count++;

    return function(y) {
      let returnValue = x + y;

      if (count % 2 === 0 && count > 2) {
        returnValue = 'Bzzz... Error!';
      };

      return returnValue;
    };
  };
}
module.exports = makeRobotAccountant;
