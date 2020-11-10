"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validationError = _interopRequireDefault(require("../utils/validation-error"));

var _forbiddenError = _interopRequireDefault(require("../utils/forbidden-error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 *
 * Function which catches all the errors thrown by the action hooks or handler
 */
const actionErrorHandler = (error, context) => {
  if (error instanceof _validationError.default) {
    const {
      resource
    } = context;
    const {
      record,
      currentAdmin
    } = context;
    const baseMessage = error.baseError?.message || context.translateMessage('thereWereValidationErrors', resource.id());
    return {
      record: { ...record?.toJSON(currentAdmin),
        params: {},
        populated: {},
        errors: error.propertyErrors
      },
      notice: {
        message: baseMessage,
        type: 'error'
      }
    };
  }

  if (error instanceof _forbiddenError.default) {
    const {
      resource
    } = context;
    const baseMessage = error.baseMessage || context.translateMessage('anyForbiddenError', resource.id());
    return {
      notice: {
        message: baseMessage,
        type: 'error'
      }
    };
  }

  throw error;
};

var _default = actionErrorHandler;
exports.default = _default;