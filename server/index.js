const path = require('path');
const express = require('express');
const app = express();

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')))

// Logging Middleware
const morgan = require('morgan');
app.use(morgan('dev'))

//Static Middleware
app.use(express.static(path.join(__dirname, '../public/')))

//Body Parsing Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//matches all requests to /api
app.use('/api', require('./routes'))

// Make sure this is right at the end of your server logic!
// (However, if you have middleware to serve up 500s, that go would before this as well)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


//Handle 500 (internal) errors
//Make sure this is at the very end of your server entry file!
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  })


//Start the Server
const port = 3000 //process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
})