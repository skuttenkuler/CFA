//install packages
const express = require("express");
var cors = require("cors");
var jwt = require('express-jwt');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

//parser
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set PORT

const db = require("./models");

app.use(routes)


//use static files
app.use(express.static("public"));



db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost: ' + PORT);
    });
  });

