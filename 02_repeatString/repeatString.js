const repeatString = function (string, repeat) {
  if (repeat == 1) {
    return string;
  } else if (repeat < 0) {
    return "ERROR";
  }
  return string.repeat(repeat);
};

// Do not edit below this line
module.exports = repeatString;
