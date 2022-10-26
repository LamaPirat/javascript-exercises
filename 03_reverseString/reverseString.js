const reverseString = function (string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = splitString.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
