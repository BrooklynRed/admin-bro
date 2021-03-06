"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recordInList = _interopRequireDefault(require("./record-in-list"));

var _recordsTableHeader = _interopRequireDefault(require("./records-table-header"));

var _noRecords = _interopRequireDefault(require("./no-records"));

var _designSystem = require("../../design-system");

var _selectedRecords = _interopRequireDefault(require("./selected-records"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RecordsTable = props => {
  const {
    resource,
    records,
    actionPerformed,
    sortBy,
    direction,
    isLoading,
    onSelect,
    selectedRecords,
    onSelectAll
  } = props;

  if (!records.length) {
    if (isLoading) {
      return /*#__PURE__*/_react.default.createElement(_designSystem.Loader, null);
    }

    return /*#__PURE__*/_react.default.createElement(_noRecords.default, {
      resource: resource
    });
  }

  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
  return /*#__PURE__*/_react.default.createElement(_designSystem.Table, null, /*#__PURE__*/_react.default.createElement(_selectedRecords.default, {
    resource: resource,
    selectedRecords: selectedRecords
  }), /*#__PURE__*/_react.default.createElement(_recordsTableHeader.default, {
    properties: resource.listProperties,
    titleProperty: resource.titleProperty,
    direction: direction,
    sortBy: sortBy,
    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
    selectedAll: selectedAll
  }), /*#__PURE__*/_react.default.createElement(_designSystem.TableBody, null, records.map(record => /*#__PURE__*/_react.default.createElement(_recordInList.default, {
    record: record,
    resource: resource,
    key: record.id,
    actionPerformed: actionPerformed,
    isLoading: isLoading,
    onSelect: onSelect,
    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
  }))));
};

var _default = RecordsTable;
exports.default = _default;