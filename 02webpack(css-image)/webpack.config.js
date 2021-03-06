/**
 * webpack 配置文件
 * 使用commonjs语法进行编写配置文件
 */

// 拼接绝对路径
const {resolve} = require('path');

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    output: {
        // 输出配置
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname nodejs变量，代表当前文件目录绝对路径
        path: resolve(__dirname, 'build')
    }, 
    // loader配置
    module: {
        rules:[
            // 详细loader配置
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use中loader执行顺序：从右至左，从下到上依次执行
                    // 创建style标签，将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // 插件配置
    plugins: [
        // 详细插件配置
    ],
    // 模式
    mode: "development", // 开发
    // mode: "production" // 生成
}