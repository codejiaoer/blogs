/**
 * patch-theme-color.js
 *
 * hexo-theme-indigo 的颜色写死在 Less 变量文件中。
 * 这个脚本在每次 hexo generate 前，将主题颜色替换为淡蓝色调。
 *
 * 主色：#5B9BD5（晴空蓝）
 */
'use strict';

/* global hexo */

const fs = require('fs');
const path = require('path');

const VARIABLE_FILE = path.join(
  __dirname,
  '../themes/indigo/source/css/_partial/variable.less'
);

// 淡蓝色调（Material-style light blue）
const COLOR_MAP = {
  // 原始色 → 新色
  '@darkPrimaryColor: #303f9f': '@darkPrimaryColor: #4A8FCA',  // 深蓝
  '@primaryColor: #3f51b5':     '@primaryColor: #5B9BD5',      // 主蓝（晴空蓝）
  '@lightPrimaryColor: #c5cae9': '@lightPrimaryColor: #BDD7EE', // 淡蓝
  '@accentColor: #ff4081':      '@accentColor: #42A5F5',       // 强调色（亮蓝）
};

// scripts 在 hexo 初始化时同步执行，直接在这里 patch 即可（无需 filter）
(function patchColor() {
  if (!fs.existsSync(VARIABLE_FILE)) {
    hexo.log.warn('[patch-theme-color] variable.less not found, skipping.');
    return;
  }

  let content = fs.readFileSync(VARIABLE_FILE, 'utf8');
  let patched = false;

  for (const [from, to] of Object.entries(COLOR_MAP)) {
    if (content.includes(from)) {
      content = content.replace(from, to);
      patched = true;
    }
  }

  if (patched) {
    fs.writeFileSync(VARIABLE_FILE, content, 'utf8');
    hexo.log.info('[patch-theme-color] ✅ 主题颜色已替换为淡蓝色 (#5B9BD5)');
  } else {
    hexo.log.info('[patch-theme-color] 颜色已是最新，无需替换。');
  }
}());
