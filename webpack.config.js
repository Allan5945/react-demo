
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:{
        main:path.join(__dirname,"/src/main.js")
    },
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use:['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /(\.css|\.scss)$/,
                use: ['style-loader','css-loader','sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "url-loader?limit=1000&name=img/[name][hash:8].[ext]"
            },
        ]
    },
    devtool: '#eval-source-map',
    devServer: {
        contentBase: [ path.join(__dirname)],//本地服务器所加载的页面所在的目录   ** 如果使用htmlWebpackPlugin插件则这个配置生效  - 建议使用 htmlWebpackPlugin
        historyApiFallback: true, //不跳转
        hot: true,
        open:true,
        inline: true,//实时刷新
        port:8091,  // 指定要监听请求的端口号
        // host: "127.0.0.1",  // 默认是localhost，开启将可以让外部设备访问到
        https: false,
        noInfo:true,     //启动时和每次保存之后那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。\
        lazy:false,     //开启 webpack 不会监视任何文件改动
        headers: {},    //在所有请求中添加首部内容：
        // openPage:"index.html",  // 修改默认打开的页面
        proxy:{   // 代理请求
            "/obtain": {
                target: 'http://localhost:8050',
              changeOrigin: true,
              secure: false,
              bypass: function(req, res, proxyOptions) {
                  // if(req.method == 'GET')return "/index.html";
                  // if(req.url == '/'){
                  //     return "/index.html"
                  // };
                  var urls = req.url;
                  if(urls == '/' || urls.indexOf("html") != -1 || urls.indexOf("png") != -1 || urls.indexOf("jpg") != -1){
                      return "/index.html"
                  };
              }
            }
            
        }
    },
    resolve:{   // 扩展名
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    plugins: [
        new htmlWebpackPlugin({
            template:"index.html",
            filename:'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};