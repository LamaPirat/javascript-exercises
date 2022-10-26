const findTheOldest = function (array) {
  let preAge = 0;
  let oldest = "Carly";

  for (i = 0; i < array.length; i++) {
    let death = array[i].yearOfDeath;
    let birth = array[i].yearOfBirth;
    let age = death - birth;
    if (age > preAge) {
      preAge = age;
      oldest = String(array[i].name);
    }
  }
  console.log(oldest);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
