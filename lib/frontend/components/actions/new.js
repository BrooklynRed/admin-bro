"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _propertyType = _interopRequireDefault(require("../property-type"));

var _designSystem = require("../design-system");

var _actionHeader = _interopRequireDefault(require("../app/action-header"));

var _useRecord = _interopRequireDefault(require("../../hooks/use-record"));

var _appendForceRefresh = require("./utils/append-force-refresh");

var _useTranslation = require("../../hooks/use-translation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const New = props => {
  const {
    record: initialRecord,
    resource,
    action
  } = props;
  const {
    record,
    handleChange,
    submit: handleSubmit,
    loading
  } = (0, _useRecord.default)(initialRecord, resource.id);
  const {
    translateButton
  } = (0, _useTranslation.useTranslation)();
  const history = (0, _reactRouter.useHistory)();

  const submit = event => {
    event.preventDefault();
    handleSubmit().then(response => {
      if (response.data.redirectUrl) {
        history.push((0, _appendForceRefresh.appendForceRefresh)(response.data.redirectUrl));
      } // if record has id === has been created


      if (response.data.record.id) {
        handleChange({
          params: {},
          populated: {},
          errors: {}
        });
      }
    });
    return false;
  };

  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    as: "form",
    onSubmit: submit,
    flex: true,
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.DrawerContent, null, action?.showInDrawer ? /*#__PURE__*/_react.default.createElement(_actionHeader.default, props) : null, resource.editProperties.map(property => /*#__PURE__*/_react.default.createElement(_propertyType.default, {
    key: property.name,
    where: "edit",
    onChange: handleChange,
    property: property,
    resource: resource,
    record: record
  }))), /*#__PURE__*/_react.default.createElement(_designSystem.DrawerFooter, null, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    "data-testid": "button-save"
  }, loading ? /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "Fade",
    spin: true
  }) : null, translateButton('save', resource.id))));
};

var _default = New;
exports.default = _default;