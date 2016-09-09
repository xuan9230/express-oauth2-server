var express = require('express');
var app = express();

var port = 3030;

// webpack hot reload middleware
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev.js');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


// express server

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
  console.log('listening on: ' + port);
});
