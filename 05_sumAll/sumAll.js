const sumAll = function (num1, num2) {
  let sum = 0;

  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 > -1 && num2 > -1) {
      //if num1 is larger than num2
      if (num1 < num2) {
        while (num1 <= num2) {
          sum += num1;
          num1++;
        }
        return sum;
      }

      //if num2 is larger than num1
      if (num2 < num1) {
        while (num2 <= num1) {
          sum += num2;
          num2++;
        }
        return sum;
      }
    }
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
