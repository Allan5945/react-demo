/**
 * Created by Administrator on 2017/9/21.
 */
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:['./src/script/main.js','./src/script/a.js'],
    output:{
        path: __dirname + "/dist",
        filename:"[name]-[hash].js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: __dirname + "/dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    plugins: [
        // new EncodingPlugin({
        //     encoding: 'UTF-8'
        // })
        new htmlWebpackPlugin({
            template:"index.html"
        })
    ]
};