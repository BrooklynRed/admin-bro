"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckBox = exports.CheckboxRadioContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _label = require("./label");

var _focusShadow = _interopRequireDefault(require("../utils/focus-shadow.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Icon = _styledComponents.default.svg.withConfig({
  displayName: "check-box__Icon",
  componentId: "sc-11ip8bm-0"
})(["fill:none;stroke:white;stroke-width:2px;"]);

const CheckboxRadioContainer = _styledComponents.default.span.withConfig({
  displayName: "check-box__CheckboxRadioContainer",
  componentId: "sc-11ip8bm-1"
})(["display:inline-block;vertical-align:middle;& + ", "{margin-left:", ";vertical-align:middle;margin-bottom:", ";}"], _label.Label, ({
  theme
}) => theme.space.default, ({
  theme
}) => theme.space.sm); // Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually


exports.CheckboxRadioContainer = CheckboxRadioContainer;

const HiddenCheckbox = _styledComponents.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "check-box__HiddenCheckbox",
  componentId: "sc-11ip8bm-2"
})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);

const checkboxBackground = (theme, checked, disabled) => {
  if (checked) {
    return disabled ? theme.colors.grey40 : theme.colors.primary100;
  }

  return theme.colors.white;
};

const StyledCheckbox = _styledComponents.default.a.withConfig({
  displayName: "check-box__StyledCheckbox",
  componentId: "sc-11ip8bm-3"
})(["display:inline-block;width:16px;font-size:12px;cursor:pointer;border:1px solid ", ";height:16px;background:", ";transition:all 150ms;position:relative;", ":focus + &{", ";}", ":hover + &{border-color:", ";}", "{visibility:", ";}&:after{content:'';position:absolute;left:-5px;top:-5px;width:24px;height:24px;opacity:0;background:", ";}&:after:before{opacity:0.1;}"], ({
  theme
}) => theme.colors.grey40, ({
  checked,
  theme,
  disabled
}) => checkboxBackground(theme, checked, disabled), HiddenCheckbox, ({
  theme
}) => `box-shadow: ${(0, _focusShadow.default)(theme)};`, HiddenCheckbox, ({
  theme
}) => theme.colors.grey60, Icon, props => props.checked ? 'visible' : 'hidden', ({
  theme
}) => theme.colors.primary100);

/**
 * @typedef {object} CheckBoxProps
 * @alias CheckBoxProps
 * @memberof CheckBox
 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
 *                          `checked` etc.
 */

/**
 * Wrapped checkbox input.
 *
 * Usage:
 * ```javascript
 * import { CheckBox, CheckBoxProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <CheckBox id="checkbox1"/>
 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
 *   </Box>
 * )
 */
const CheckBox = props => {
  const {
    className,
    checked,
    onChange,
    disabled,
    ...restProps
  } = props;
  const [isChecked, setChecked] = (0, _react.useState)(checked ?? false);

  const handleChange = event => {
    if (onChange) {
      onChange(event);
    } else {
      setChecked(!event.target.checked);
    }
  };

  (0, _react.useEffect)(() => {
    setChecked(checked ?? false);
  }, [checked]);
  return /*#__PURE__*/_react.default.createElement(CheckboxRadioContainer, {
    className: [className ?? '', 'admin-bro_Checkbox'].join(' ')
  }, /*#__PURE__*/_react.default.createElement(HiddenCheckbox, _extends({
    checked: isChecked,
    onChange: handleChange
  }, restProps, {
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(StyledCheckbox, {
    checked: isChecked,
    disabled: disabled,
    onClick: event => handleChange && handleChange(event)
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
};

exports.CheckBox = CheckBox;
var _default = CheckBox;
exports.default = _default;