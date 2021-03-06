"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _flat = _interopRequireDefault(require("flat"));

var _convertParamsToArrayItems = _interopRequireDefault(require("./convert-params-to-array-items"));

var _designSystem = require("../../design-system");

var _updateParamsArray = _interopRequireDefault(require("./update-params-array"));

var _addNewItemTranslation = _interopRequireDefault(require("./add-new-item-translation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  flatten,
  unflatten
} = _flat.default;

const normalizeParams = params => flatten(unflatten(params, {
  overwrite: true
}));

const ItemRenderer = props => {
  const {
    ItemComponent,
    property,
    i,
    onDelete
  } = props;
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flex: true,
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(ItemComponent, _extends({}, props, {
    property: { ...property,
      name: `${property.name}.${i}`,
      label: `[${i + 1}]`,
      isArray: false
    }
  }))), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flexShrink: 0
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    ml: "default",
    type: "button",
    size: "icon",
    onClick: event => onDelete(event),
    variant: "danger"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "Delete"
  }))));
};

class Edit extends _react.default.Component {
  constructor(props) {
    super(props);
    this.addNew = this.addNew.bind(this);
  }

  addNew(event) {
    const {
      property,
      record,
      onChange
    } = this.props;
    const items = (0, _convertParamsToArrayItems.default)(property, record);
    const newRecord = { ...record
    };
    newRecord.params = normalizeParams({ ...newRecord.params,
      // otherwise yarn types is not working
      [property.name]: [...items, property.subProperties.length ? {} : '']
    });
    onChange(newRecord);
    event.preventDefault();
    return false;
  }

  removeItem(i, event) {
    const {
      property,
      record,
      onChange
    } = this.props;
    const items = (0, _convertParamsToArrayItems.default)(property, record);
    const newItems = [...items];
    newItems.splice(i, 1);
    const newRecord = { ...record
    };
    newRecord.params = (0, _updateParamsArray.default)(newRecord.params, property.name, newItems);
    onChange(newRecord);
    event.preventDefault();
    return false;
  }

  renderInput() {
    const {
      property,
      record,
      resource
    } = this.props;
    const items = (0, _convertParamsToArrayItems.default)(property, record);
    return /*#__PURE__*/_react.default.createElement(_designSystem.Section, {
      mt: "xl"
    }, items.map((item, i) => /*#__PURE__*/_react.default.createElement(ItemRenderer, _extends({}, this.props, {
      // eslint-disable-next-line react/no-array-index-key
      key: i,
      i: i,
      onDelete: event => this.removeItem(i, event)
    }))), /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
      onClick: this.addNew,
      type: "button",
      size: "sm"
    }, /*#__PURE__*/_react.default.createElement(_addNewItemTranslation.default, {
      resource: resource,
      property: property
    })));
  }

  render() {
    const {
      property,
      record,
      testId
    } = this.props;
    const error = record.errors && record.errors[property.name];
    return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
      error: !!error,
      "data-testid": testId
    }, /*#__PURE__*/_react.default.createElement(_designSystem.Label, {
      htmlFor: property.name
    }, property.label), this.renderInput(), /*#__PURE__*/_react.default.createElement(_designSystem.FormMessage, null, error && error.message));
  }

}

exports.default = Edit;