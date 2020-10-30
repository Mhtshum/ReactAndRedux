const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer'); // create handy report in our bundle

// to be used by configStore to switch to prod env
process.env.NODE_ENV = 'production';

module.exports = {
	mode: 'production', // configure webpack with useful defaults for production build
	target: 'web',
  devtool: 'source-map', // production source map slower than dev. setting but higher quality 
	entry: './src/index',
	output: { // since production mode webpack generate physcially files
		path : path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: 'bundle.[hash].js'
	},
	plugins :[ // enhance webpack power
    // will generate build report 
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode : 'static' }),    
    // will only change when file changes via new hash each time which support file expire header for webserver and user will only load changes when css changes
    new MiniCssExtractPlugin({ filename : '[name].[contenthash].css' }),
		new webpack.DefinePlugin({
      // this DefinePlugin will make sure env. variable will be availabe throughout react app for building purposes like lib.s webpack is building react look for this if this should be build in production mode which omits proptypes features for development and helps us to minimize bundle size
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://11.11.11.5:3001")
    }),
    // this generate index.html & bundle for css+JS and add reference of bundle into index.html file dynamically as those changes with new hashes 
		new HtmlWebpackPlugin({
			template: "src/index.html",
			favicon: "src/favicon.ico",
      minify: {
        collapseWhiteSpace : true,
        keepClosingSlash : true,
        minifyCSS : true,
        minifyJS : true,       
        minifyURLs : true,       
        removeComments : true,
        removeEmptyAttributes : true,
        removeRedundantAttributes : true,
        removeStyleLinkTypeAttributes : true,
        removeWhiteSpaces : true,
        useShortDoctype : true
      }
		}),
    
	 ],
	module : { 
		rules : [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader','eslint-loader'] 
			},
			{
				test: /(\.css)$/,
				use: [
          MiniCssExtractPlugin.loader,
          {
            loader : "css-loader",
            options : {
              sourceMap : true
            }
          },
          {
            loader : "postcss-loader",
            options : {
              plugins : () => [require("cssnano")],
              sourceMap : true
            }
          }
        ]
			}			
		]
	},	
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  }
};