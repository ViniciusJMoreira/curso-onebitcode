"use strict";

var _saveTransaction = require("./entities/saveTransaction.js");
var form = document.querySelector('form');
form.addEventListener('submit', _saveTransaction.saveTransaction);
document.addEventListener('DOMContentLoaded', _saveTransaction.setup);