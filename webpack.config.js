const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: "development",

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true, 
    port: 8080,

    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin(),
  ], 
  module: {
    rules: [

        

        { 
            test: /\.html$/i, 
            loader: 'html-loader', 
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/preset-env"
            ],
              plugins: ['transform-class-properties']
          }
        },

        {

            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'

        },

        {

            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',

        },


        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: { importLoaders: 1 }
            },'postcss-loader']
        }
            
    
    ]
  }
};