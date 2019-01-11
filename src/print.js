/*
 * @Description: 学习管理输出功能时的多个入口文件之一；同时可作为入口主文件引入的模块（配合热替换功能）；懒加载模块
 * @Author: Shie
 * @Date: 2018-12-21
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-11 11:16:52
 */

console.log('The print.js moudule has loaded! See the network tab in dev tools...');

export default function printMe() {
  console.log('button Clicked: Here\'s "some text"!');
};
