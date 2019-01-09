/*
 * @Description: 入口主文件
 * @Author: Shie
 * @Date: 2018-12-19
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-09 19:31:32
 */

import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';
import './styles.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

console.log('process.env.NODE_ENV in src: ', process.env.NODE_ENV);

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var preElement = document.createElement('pre');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  preElement.innerHTML = '5 cubed is equal to ' + cube(5);

  element.appendChild(btn);
  element.appendChild(preElement);

  return element;
}

var element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe moudle!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}
