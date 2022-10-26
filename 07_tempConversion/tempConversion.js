const ftoc = function (fnum) {
  let cnum = (fnum - 32) * (5 / 9);
  return Math.round(cnum * 10) / 10;
};

const ctof = function (cnum) {
  let fnum = cnum * (9 / 5) + 32;
  return Math.round(fnum * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
