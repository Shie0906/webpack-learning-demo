/*
 * @Description: 单独引入 polyfill 的文件
 * @Author: Shie
 * @Date: 2019-01-14 14:29:33
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-14 14:55:33
 */

var modernBrowser = (
  'fetch' in window &&
  'assign' in Object
);

if (!modernBrowser) {
  // import 'babel-polyfill';
  // import 'whatwg-fetch';
  require('babel-polyfill');
  require('whatwg-fetch');

  // import() 调用会在内部用到 promise。如果有在旧版本浏览器中使用 import()，记得使用一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。
  // import "core-js/modules/es6.promise";
  // import "core-js/modules/es6.array.iterator";
  require("core-js/modules/es6.promise");
  require("core-js/modules/es6.array.iterator") ;
}
