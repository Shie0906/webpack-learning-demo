/*
 * @Description: 演示 shimming 全局导出变量
 * @Author: Shie
 * @Date: 2019-01-14 14:11:34
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-14 14:12:42
 */

var file = 'blah.txt';
var helpers = {
  test: function () { console.log('test something'); },
  parse: function() { console.log('parse something'); },
};
