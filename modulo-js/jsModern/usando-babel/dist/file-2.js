"use strict";

var median = function median() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var orderedNumbers = [].concat(numbers).sort(a, function (b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[numbers];
  }
  var firstMiddle = orderedNumbers[middle - 1];
  var secondMiddle = orderedNumbers[middle];
  return avarage(firstMiddle, secondMiddle);
};
var mode = function mode() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(a, function (b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};