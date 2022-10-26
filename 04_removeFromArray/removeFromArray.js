const removeFromArray = function () {
  let array = arguments[0];
  for (y = 1; y < arguments.length; y++) {
    for (i = 0; i < array.length; i++) {
      if (array[i] === arguments[y]) {
        array.splice(i, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
