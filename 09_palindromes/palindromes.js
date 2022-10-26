const palindromes = function (string) {
  string = string.replace(/[.,\s/#!$%\^&\*;:{}=\-_`~()]/g, "");
  string = string.toLowerCase();
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  console.log(joinArray);
  console.log(string);
  if (joinArray === string) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
