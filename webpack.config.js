'use strict';

var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var CONTEXT = path.join(__dirname,'./client/');
var FILES = {
	vendor: path.join(CONTEXT,'./vendor.js'),
	app: path.join(CONTEXT,'./app.js')
}

var webpackConfig = {
	context: CONTEXT,
	entry: FILES,
	output: {
		path: path.join(CONTEXT,'./build'),
		filename: '[name].js'
	},
	resolve: {
		modulesDirectories:['','bower_components'],
		extensions: ['','.js']
	},
	resolveLoader: {
		root: path.join(__dirname,'node_modules')
	},
	module: {
		loaders: [
			{ test: /\.scss|css$/, loader: ExtractTextPlugin.extract('style',['css','sass']) },
			{ test: /\.(png|jp*g|gif|svg)([\?]?.*)$/, loader: "file?name=img/[name].[ext]?[hash]"  },
			{ test: /\.(woff|ttf|eot)([\?]?.*)$/, loader: "file?name=fonts/[name].[ext]?[hash]" },
			{
				test: /\.js?$/,
				include: CONTEXT,
				exclude: /(node_modules|bower_components)/,
      			loader: 'babel',
      			query: {
			        presets: ['es2015']
			    }
			},
			{ test: /\.tpl.html$/, loader:'ng-cache?prefix=[dir]/[dir]' }
		],
		noParse: [ /\node_modules$/, /\bower_components$/ ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
		new BowerWebpackPlugin({
		    modulesDirectories: [ 'bower_components' ],
		    manifestFiles:      'bower.json',
		    includes:           /.*/,
		    excludes:           /.*\.less/,
		    searchResolveModulesDirectories: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ngAnnotatePlugin()
	]
};

if(process.env.NODE_ENV == 'development') {
	webpackConfig.devtool = 'cheap-inline-source-map';
	webpackConfig.watch = true;
	webpackConfig.watchOptions = { agregateTimeout: 100 };
} else if(process.env.NODE_ENV == 'production') {
	webpackConfig.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
        	compress: {
        		warnings: false
        	},
        	mangle: false
        })
    );
}

module.exports = webpackConfig;