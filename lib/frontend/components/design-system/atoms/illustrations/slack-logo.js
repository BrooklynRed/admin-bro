"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slack = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Slack = props => {
  const {
    width,
    height
  } = props;
  const svgWidth = width || '72px';
  const svgHeight = height || '72px';
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: svgWidth,
    height: svgHeight,
    viewBox: "70 70 140 140",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#E01E5A'
    },
    d: "M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#E01E5A'
    },
    d: "M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#36C5F0'
    },
    d: "M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#36C5F0'
    },
    d: "M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#2EB67D'
    },
    d: "M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#2EB67D'
    },
    d: "M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#ECB22E'
    },
    d: "M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    style: {
      fill: '#ECB22E'
    },
    d: "M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"
  }))));
};

exports.Slack = Slack;
var _default = Slack;
exports.default = _default;