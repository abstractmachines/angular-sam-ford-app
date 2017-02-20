const path = require("path");

var webpack = require("webpack");

var UglifyJsPlugin = require('webpack-uglify-js-plugin');

var AngularInjectorPlugin = require('webpack-angular-injector-plugin');

const PATHS = {
	app: path.join(__dirname, "./js/app.js"),
	build: path.join(__dirname, "./dist/")
};

module.exports = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: "[name].js"
	},
	eslint: {
		configFile: "./.eslintrc.json",
		failOnWarning: false,
		failOnError: true
	},
	csslint: {
		configFile: "./.csslintrc"
	},
	plugins:
	[
		new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		mangle: false
		}),
		new AngularInjectorPlugin({
			exclude: /fixture/
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["babel-loader?presets[]=es2015", "eslint-loader"]
			},
			{
				test: /\.css$/,
				loader: "style!css?csslint?configFile=./.csslintrc"
			},
			{
				test: /\.(jpg|png)$/,
				use: "url-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: "url-loader?limit=100000"
			}
		]
	}
};
