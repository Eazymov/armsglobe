require('dotenv').config();

const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

const config = {
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'none',
  plugins: [
    new ConcatPlugin({
      uglify: false,
      useHash: false,
      sourceMap: false,
      name: 'flexible',
      fileName: 'build.js',
      filesToConcat: [
        './assets/js/Detector.js',
        './assets/js/Tween.js',
        './assets/js/dat.gui.min.js',
        './assets/js/Three.js',
        './assets/js/THREEx.KeyboardState.js',
        './assets/js/THREEx.WindowResize.js',
        './assets/js/Stats.js',
        './assets/js/jquery-1.7.1.min.js',
        './assets/js/ShaderExtras.js',
        './assets/js/canvg.js',
        './assets/js/rgbcolor.js',
        './assets/js/innersvg.js',
        './assets/js/d3.v2.min.js',
        './src/js/util.js',
        './src/js/mousekeyboard.js',
        './src/js/camerastates.js',
        './src/js/datguicontrol.js',
        './src/js/geopins.js',
        './src/js/visualize.js',
        './src/js/visualize_lines.js',
        './src/js/markers.js',
        './src/js/svgtoy.js',
        './src/js/dataloading.js',
        './src/js/main.js',
      ]
    })
  ]
};

switch (process.env.NODE_ENV) {

  case 'development':
    config.devServer = {
      port: 5000,
      publicPath: '/dist/'
    };
    break;

  default:
    break;
}

module.exports = config
