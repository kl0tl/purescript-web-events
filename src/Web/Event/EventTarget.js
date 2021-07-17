"use strict";

export var eventListener = function (fn) {
  return function () {
    return function (event) {
      return fn(event)();
    };
  };
};

export var addEventListener = function (type) {
  return function (listener) {
    return function (useCapture) {
      return function (target) {
        return function () {
          return target.addEventListener(type, listener, useCapture);
        };
      };
    };
  };
};

export var removeEventListener = function (type) {
  return function (listener) {
    return function (useCapture) {
      return function (target) {
        return function () {
          return target.removeEventListener(type, listener, useCapture);
        };
      };
    };
  };
};

export var dispatchEvent = function (event) {
  return function (target) {
    return function () {
      return target.dispatchEvent(event);
    };
  };
};
