//install packages
const express = require("express");
const app = express();
const exphbs = require("express-handlebars") 

//set PORT
const PORT = process.env.PORT || 3000;

//ROUTES
require("./routes/api-routes")(app)
require("./routes/html-routes")(app)

//set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//use routes
//use static files
app.use(express.static("public"));

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost: ' + PORT);
    });
  });

