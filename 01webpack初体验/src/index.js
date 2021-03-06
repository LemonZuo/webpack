/**
 * index.js
 * webpack 打包入口文件/起始文件
 * 
 * 1.运行指令：
 *      开发环境：webpack ./src/index.js -o ./build/ --mode=development
 *      生产环境： webpack ./src/index.js -o ./build/ --mode=production
 * 
 * 2.结论：
 *      1-webpack 可以处理js、json文件，不能处理css、html、image等其他资源
 *      2-可以处理ES6模块化使浏览器可以识别
 *      3-可以压缩代码
 */
import data from "./data.json";

console.log(data);

function add(x, y) {
    return x + y;
}

console.log(add(10, 20));