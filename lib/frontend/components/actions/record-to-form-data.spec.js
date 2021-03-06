"use strict";

var _factoryGirl = _interopRequireDefault(require("factory-girl"));

var _chai = require("chai");

var _recordToFormData = _interopRequireDefault(require("./record-to-form-data"));

require("../spec/record-json.factory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('recordToFormData', function () {
  it('converts objects to empty string', async function () {
    const record = await _factoryGirl.default.build('RecordJSON', {
      params: {
        someEmptyObject: {}
      }
    });
    (0, _chai.expect)((0, _recordToFormData.default)(record).get('someEmptyObject')).to.equal('');
  });
  it('removes duplicated root keys for nested arrays', async function () {
    const params = {
      'Item.0': '',
      'Item.0.imageVariants.0.imageURL': 'some-value'
    };
    const record = await _factoryGirl.default.build('RecordJSON', {
      params
    });
    (0, _chai.expect)((0, _recordToFormData.default)(record).get('Item.0')).to.be.null;
    (0, _chai.expect)((0, _recordToFormData.default)(record).get('Item.0.imageVariants.0.imageURL')).to.equal(params['Item.0.imageVariants.0.imageURL']);
  });
});