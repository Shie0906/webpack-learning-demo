/*
 * @Description: 入口主文件
 * @Author: Shie
 * @Date: 2018-12-19
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-14 15:56:42
 */

import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';
// import { file, parse } from './globals.js';
import './styles.css';
// const printMe = require('./print.js');
// const cube = require('./math.js').cube;
// const file = require('./globals.js').file;
// const parse = require('./globals.js').parse;
// require('./styles.css');

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

console.log('process.env.NODE_ENV in src: ', process.env.NODE_ENV);

/**
 * 静态导入 lodash
 * @returns {Object} 返回创建的 DOM 元素对象
 */
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var br = document.createElement('br');
  var preElement = document.createElement('pre');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = join(['Hello', 'webpack'], ' ');

  // // Assume we are in the context of `window`
  // this.alert('Hmmm, this probably isn\'t a great idea...');

  // console.log('globals file and parse: ', file, parse)

  btn.innerHTML = 'Click me and look at the console!';
  // btn.onclick = printMe;

  preElement.innerHTML = '5 cubed is equal to ' + cube(5);

  element.appendChild(br);
  element.appendChild(btn);
  element.appendChild(preElement);

  // import() 实现懒加载
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  });

  return element;
}

var element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.');
    console.log(json);
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error));

/**
 * 动态导入 lodash
 * @returns {Promise} Promise object represents the DOM element.
 */
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(function(_) {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     var preElement = document.createElement('pre');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     preElement.innerHTML = '5 cubed is equal to ' + cube(5);

//     element.appendChild(btn);
//     element.appendChild(preElement);

//     return element;
//   }).catch(function(error) { return 'An error occurred while loading the component' });
// }


/**
 * 使用 async 函数简化动态导入 lodash 代码
 * @returns {Promise} Promise object represents the DOM element.
 */
// async function getComponent() {
//   const element = document.createElement('div');
//   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//   return element;
// }

// getComponent().then(function(component) {
//   document.body.appendChild(component);
// })

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe moudle!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}
