//install packages
const express = require("express");
const app = express();
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
var expressValidator = require('express-validator');
const Store = require("express-mysql-session")(session);

//set PORT
const PORT = process.env.PORT || 3000;

const db = require("./models");

//sql session
//production jaws db
var sqlStore = new Store ({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "cfa_db"
});


//parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(expressValidator());


//use static files
app.use(express.static("public"));
//required for passport
app.use(session({ store: sqlStore, 
                  secret: "concerts for all",
                  resave: true,
                  saveUninitialized: true,
                  cookie : {secure:false} }));
app.use(passport.initialize());
app.use(passport.session());//persistant logins
app.use(bodyParser.urlencoded({ extended: false }));
///
// middleware to send user info to front end
app.use((req, res, next) => {
	
	if (req.session && req.user.type === 'artist') {
		db.Artist.findOne({
			where: { id: req.user.id }
		}).then((user, err) => {
			if (err) {
				console.log(err);
      }
      console.log(req.session.user)
			req.user = user;
			req.session.user = user;  //refresh the session value
      res.locals.user = user;
      
			next();
		});
	} else if(req.session && req.user.type === 'user') {
		db.User.findOne({
			where: { id: req.user.id }
		}).then((user, err) => {
			if (err) {
				console.log(err);
      }
      console.log(req.session.user)
			req.user = user;
			req.session.user = user;  //refresh the session value
      res.locals.user = user;
      
			next();
		});}else {
		next();
	}
});
//ROUTES
require('./routes/html-routes')(app)
require('./routes/api-routes.js')(app);
require('./routes/passport-routes')(app)


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost: ' + PORT);
    });
  });

