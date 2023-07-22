"use strict";

var avarage = function avarage() {
  for (var _len = arguments.length, entries = new Array(_len), _key = 0; _key < _len; _key++) {
    entries[_key] = arguments[_key];
  }
  var sum = entries.reduce(function (numAcc, num) {
    return numAcc + num;
  }, 0);
  return sum / entries.length;
};
var weightAvarage = function weightAvarage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (numAcc, _ref) {
    var numbers = _ref.numbers,
      weight = _ref.weight;
    return numAcc + numbers * weight;
  }, 0);
  var weightSum = entries.reduce(function (numAcc, entry) {
    return numAcc + entry.weight;
  }, 0);
  return sum / weightSum;
};
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
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
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
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
