//install packages
const express = require("express");
const app = express();
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')

//set PORT
const PORT = process.env.PORT || 3000;

const db = require("./models");
require('./config/passport')(passport)

//parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//use static files
app.use(express.static("public"));
//required for passport
app.use(session({ secret: "concerts for all" }));
app.use(passport.initialize());
app.use(passport.session());//persistant logins
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES
require('./routes/html-routes')(app)
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost: ' + PORT);
    });
  });

