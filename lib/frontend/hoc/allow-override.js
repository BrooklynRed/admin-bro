"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @private
 *
 * Overrides one of the component form AdminBro core when user pass its name to
 * {@link AdminBro.bundle} method.
 *
 * If case of being overridden, component receives additional prop: `OriginalComponent`
 *
 * @example
 * AdminBro.bundle('./path/to/component', 'SidebarFooter')
 */
function allowOverride(OriginalComponent, name) {
  const WrapperComponent = props => {
    let globalAny = window;
    globalAny = window;
    let Component = OriginalComponent;

    if (globalAny.AdminBro && globalAny.AdminBro.UserComponents && globalAny.AdminBro.UserComponents[name]) {
      Component = globalAny.AdminBro.UserComponents[name];
      return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
        OriginalComponent: OriginalComponent
      }));
    }

    return /*#__PURE__*/_react.default.createElement(Component, props);
  };

  return WrapperComponent;
}

var _default = allowOverride;
exports.default = _default;