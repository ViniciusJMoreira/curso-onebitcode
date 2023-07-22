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