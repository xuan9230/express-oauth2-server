var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', //note that it reloads the page if hot module reloading fails.
    './app/index'
  ],
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js|\.jsx$/, include: path.join(__dirname, 'app'), loader: ['babel'], query:{ presets: ['es2015', 'react', 'stage-0']} },
      {test: /(\.css)$/, loader: 'style!css!postcss'},
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
};
