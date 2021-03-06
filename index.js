
/**
 * Enabled flag.
 */

var enabled = window.localStorage && window.localStorage.dev;

// noop

if (!enabled) {
  module.exports = function(){};
  return;
}

/**
 * Map `obj` to `el` for inspection with `name` or "_".
 *
 * @param {Element|jQuery|Number} el
 * @param {Object} obj
 * @param {String} name
 * @api public
 */

module.exports = function(el, obj, name){
  name = name || '_';
  if (!el) throw new TypeError('element required');
  el = el[0] || el;
  el[name] = obj;
  el.setAttribute('inspectable', '');
};
