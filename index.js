var EventEmitter = require('events').EventEmitter;
var emitClicks   = require('emit-clicks');

module.exports = wrap;

/**
 * DOM Wrap
 *
 * @param {DOMNode} dom
 * @return {EventEmitter}
 */

function wrap (dom) {
  var ee = new EventEmitter;
  ee.dom = dom;

  ee.appendTo = function (el) {
    el.appendChild(dom);
    return ee;
  }

  ee.remove = function () {
    dom.parentNode.removeChild(dom);
    ee.removeAllListeners();
    return ee;
  }

  var oldDisplay;
  ee.hide = function () {
    oldDisplay = dom.style.display;
    dom.style.display = 'none';
  }

  ee.show = function () {
    dom.style.display = oldDisplay || 'block';
  }

  ee.find = function (selector) {
    return dom.querySelector(selector);
  }

  ee.findAll = function (selector) {
    return dom.querySelectorAll(selector);
  }

  emitClicks(dom).on('click', function (href) {
    ee.emit('click', href);
  });

  return ee;
}
