"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClass = void 0;

// eslint-disable-next-line import/prefer-default-export
const cssClass = (className, regularClass) => {
  let names = [];

  if (className.join) {
    names = className;
  } else {
    names = [className];
  }

  const parsed = names.map(name => `admin-bro_${name}`);

  if (regularClass) {
    parsed.push(regularClass);
  }

  return parsed.join(' ');
};

exports.cssClass = cssClass;