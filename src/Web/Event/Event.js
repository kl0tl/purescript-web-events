"use strict";

export var bubbles = function (e) {
  return e.bubbles;
};

export var cancelable = function (e) {
  return e.cancelable;
};

export var _currentTarget = function (e) {
  return e.currentTarget;
};

export var defaultPrevented = function (e) {
  return function() {
    return e.defaultPrevented;
  };
};

export var eventPhaseIndex = function (e) {
  return e.eventPhase;
};

export var _target = function (e) {
  return e.target;
};

export var timeStamp = function (e) {
  return e.timeStamp;
};

export var type_ = function (e) {
  return e.type;
};

export var preventDefault = function (e) {
  return function () {
    return e.preventDefault();
  };
};

export var stopImmediatePropagation = function (e) {
  return function () {
    return e.stopImmediatePropagation();
  };
};

export var stopPropagation = function (e) {
  return function () {
    return e.stopPropagation();
  };
};
