const path=require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve( __dirname,'dist'),
        filename:'dist/bundle.js',
        
    },
   
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot:true,

       
   },

   module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ],
  },

   plugins: [
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './src/index.html'
    }),
  ],
  

}