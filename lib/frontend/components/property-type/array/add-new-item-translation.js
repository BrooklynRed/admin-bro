"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _hooks = require("../../../hooks");

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddNewItemButton = props => {
  const {
    resource,
    property
  } = props;
  const {
    translateProperty,
    translateButton
  } = (0, _hooks.useTranslation)();
  const label = translateProperty(`${property.name}.addNewItem`, resource.id, {
    defaultValue: translateButton('addNewItem', resource.id)
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "Add"
  }), label);
};

var _default = AddNewItemButton;
exports.default = _default;