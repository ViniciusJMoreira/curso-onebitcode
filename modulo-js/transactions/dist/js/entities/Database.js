"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Database = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var Database = /*#__PURE__*/function () {
  function Database() {
    _classCallCheck(this, Database);
  }
  _createClass(Database, [{
    key: "getData",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Database, Database, _data);
    }
  }, {
    key: "pushData",
    value: function pushData(transaction) {
      _classStaticPrivateFieldSpecGet(Database, Database, _data).push(transaction);
    }
  }, {
    key: "findElement",
    value: function findElement(id) {
      return _classStaticPrivateFieldSpecGet(Database, Database, _data).findIndex(function (t) {
        return t.id === id;
      });
    }
  }, {
    key: "deleteElement",
    value: function deleteElement(transactionToRemove) {
      _classStaticPrivateFieldSpecGet(Database, Database, _data).splice(transactionToRemove, 1);
    }
  }, {
    key: "convertElement",
    value: function convertElement(indexToConvert, newTransaction) {
      _classStaticPrivateFieldSpecGet(Database, Database, _data).splice(indexToConvert, 1, newTransaction);
    }
  }]);
  return Database;
}();
exports.Database = Database;
var _data = {
  writable: true,
  value: []
};