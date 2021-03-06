require("dotenv").config();

const express = require("express");
var cors = require("cors");
var jwt = require('express-jwt');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

  app.use(express.static(__dirname + "/public"));
  
// Add routes, both API and view

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.use('/api', jwt({secret: "Cheese"}));
// Error handling
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
