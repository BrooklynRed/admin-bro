"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Show = props => {
  const {
    property,
    ItemComponent
  } = props;
  return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, null, /*#__PURE__*/_react.default.createElement(_designSystem.Label, null, property.label), /*#__PURE__*/_react.default.createElement(_designSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => /*#__PURE__*/_react.default.createElement(ItemComponent, _extends({}, props, {
    key: subProperty.name,
    property: { ...subProperty,
      name: `${property.name}.${subProperty.name}`
    }
  })))));
};

var _default = Show;
exports.default = _default;