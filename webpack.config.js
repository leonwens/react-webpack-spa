var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './entry.js',
        vendors: ['react', 'redux', 'react-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].[chunkhash:8].min.js',
        publicPath: '/build/'                       
    },
    module: {
        // noParse: [/react/],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        },{
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
            include: __dirname
        },{
            test: /\.(png|jpg|eot|svg|ttf|woff)$/,
            loaders: ['url?limit=40000'],
            include: __dirname
        }]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),   // 提取第三方库
        new HtmlwebpackPlugin({
            filename: '../index.html',
            template: 'templates/template.html',
            inject: 'body'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8282'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};