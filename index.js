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

  emitClicks(dom).on('click', function (href) {
    ee.emit('click', href);
  });

  return ee;
}
