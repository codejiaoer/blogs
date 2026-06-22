/**
 * polyfill-lodash.js
 *
 * hexo-theme-indigo 是为 Hexo 3.x 开发的，依赖全局变量 `_`（lodash）。
 * Hexo 5+ 移除了这个全局变量，这里手动补回，确保主题模板正常工作。
 */
'use strict';

/* global hexo */

if (typeof global._ === 'undefined') {
  global._ = require('lodash');
}
