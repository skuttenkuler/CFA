//install packages
const express = require("express");
const app = express();


//set PORT
const PORT = process.env.PORT || 3000;

const db = require("./models");


//parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//use static files
app.use(express.static("public"));
//ROUTES
require('./routes/html-routes')(app)
//require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost: ' + PORT);
    });
  });

