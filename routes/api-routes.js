
// const isAuthenticated = require("../config/isAuthenticated");
// const auth = require("../config/auth");


// const usersController = require("../controllers/usersController");
// const artistsController = require("../controllers/usersController");
// const concertsController = require("../controllers/concertsController");

// module.exports = function(app){
// /////////////////////USER/////////////////////
// // LOGIN ROUTE

// app.get("/login", (req, res) => {
//   auth
//     .logUserIn(req.body.email, req.body.password)
//     .then(dbUser => res.json(dbUser))
//     .catch(err => res.status(400).json(err));
// });

// // SIGNUP ROUTE
// app.get("/usersignup", (req, res) => {
//   usersController.signUp(req, res);
// });

// // Any route with isAuthenticated is protected and you need a valid token
// // to access
// app.get("/:id",isAuthenticated, (req, res) => {
//   db.User.findById(req.params.id)
//     .then(data => {
//       if (data) {
//         res.json(data);
//       } else {
//         res.status(404).send({ success: false, message: "No user found" });
//       }
//     })
//     .catch(err => res.status(400).send(err));
// });

// /////////////////////ARTIST/////////////////////

// // LOGIN ROUTE
// app.get("/artistlogin",(req, res) => {
//   auth
//     .logArtistIn(req.body.email, req.body.password)
//     .then(dbUser => res.json(dbUser))
//     .catch(err => res.status(400).json(err));
// });

// // SIGNUP ROUTE
// app.get("/artistsignup",(req, res) => {
//   artistsController.signUp(req, res);
// });

// // Any route with isAuthenticated is protected and you need a valid token
// // to access
// app.get("/:id",isAuthenticated, (req, res) => {
//   db.Artist.findById(req.params.id)
//     .then(data => {
//       if (data) {
//         res.json(data);
//       } else {
//         res.status(404).send({ success: false, message: "No user found" });
//       }
//     })
//     .catch(err => res.status(400).send(err));
// });

// /////////////////////Concert/////////////////////


// // Matches with "/api/products"
// app
//   .route("/")
//   .get(concertsController.findAll)
//   .post(concertsController.create);




// }
