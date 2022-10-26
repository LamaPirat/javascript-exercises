const fibonacci = function (num) {
  let array = [1, 1];
  if (num < 0) {
    return "OOPS";
  }
  if (Number.isInteger(num) == false) {
    num = parseInt(num);
  }

  for (i = 1; i < num - 1; i++) {
    nextNum = array[i] + array[i - 1];
    array.push(nextNum);
  }
  let fibo = array[array.length - 1];

  return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
