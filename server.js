var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3030;
var clientController = require('./controllers/client');
var userController = require('./controllers/user');
var projectController = require('./controllers/project');
var oauth2Controller = require('./controllers/oauth2');

// webpack hot reload middleware
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev.js');
var compiler = webpack(webpackConfig);
var passport = require('passport');
var authController = require('./controllers/auth');

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the passport package in our application
app.use(passport.initialize());

// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// express server

// routers
const router = express.Router();
router.route('/clients')
  .post(clientController.postClients)
  .get(clientController.getClients);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

router.route('/projects')
  .post(authController.isAuthenticated, projectController.postProjects)
  .get(authController.isAuthenticated, projectController.getProjects);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

app.use('/api', router);
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
  console.log('listening on: ' + port);
});

// connect to mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/oauth-demo', (err) => {
  if (err) {
    console.log('===>  Error connecting to database');
  } else {
    console.log('===>  Succeeded in connecting to database');
  }
});
