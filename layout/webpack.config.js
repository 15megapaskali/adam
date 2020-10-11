var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry: {
        main: path.join(__dirname, 'js', 'app.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.budle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'style.bundle.css'
    }),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
        hash: true
    }),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'galeria.html'),
        filename: "./galeria.html", // name it 'home.html' and insert to the root of output folder
    })
    ],
    
    devServer: {
        // host: "192.168.1.14",
        port: 5000,
        disableHostCheck: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
    rules: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
               
            }
        }, 
        {
            test: /\.scss$/,
            use: [ 'style-loader', 
            MiniCssExtractPlugin.loader, 
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            'sass-loader']
        },
        {
        test: /\.(png|jpe?g|svg|gif|woff|otf|mp3|wave|wav|)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/'
            }
        }
        },
        {
        type: 'javascript/auto',
        test: /\.(json|html)$/,
        loader: 'html-loader'
        },
        ],
  },
};