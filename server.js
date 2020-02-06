//install packages
const express = require("express");
const session = require('express-session')
const app = express();
const passport = require('passport')
const bodyParser = require('body-parser')

//set PORT
const PORT = process.env.PORT || 3000;

const db = require("./models");


//parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//use static files
app.use(express.static("public"));

app.use(session({ secret: "concerts for all" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
require('./routes/html-routes')(app)
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost: ' + PORT);
    });
  });

