// Import express from our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
// Initialize the app
const app = express();
require('dotenv').config();
// Middlewares
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Static files
app.use(express.static('public'));

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the port to local host 3002
const port = process.env.PORT || 3002;
// Tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// This is the index route
app.get('/', (req, res) => {
  res.render('index', {
    message: 'Build bridges. Connect the world.',
    currentPage: 'home',
    documentTitle: 'Global Educational Exchange',
    subTitle: 'Building bridges. Connect the world.',
  });
});

// Require the global routes & tell the app to use them
const globalRoutes = require('./routes/global-routes');
app.get('/globals', globalRoutes);

const countryRoutes = require('./routes/country-routes');
app.use('/country', countryRoutes);

const authRoutes=require('./routes/auth-routes');
app.use('/auth',authRoutes);

const userRoutes=require('./routes/user-routes');
app.use('/user',userRoutes);

// Error handler
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});