
const isAuthenticated = require("../config/isAuthenticated");
const auth = require("../config/auth");


const usersController = require("../controllers/usersController");
const artistsController = require("../controllers/artistsController");
const concertsController = require("../controllers/concertsController");

module.exports = function(app){
// /////////////////////USER/////////////////////
// // LOGIN ROUTE

app.post("/api/users/login", (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP USERs
app.post("/api/register-user", (req, res) => {
  console.log("made it here")
  usersController.signUp(req, res);
});

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

/////////////////////ARTIST/////////////////////

// LOGIN ROUTE
app.post("/api/artists/login",(req, res) => {
  console.log("here")
  auth
    .logArtistIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
    console.log("all the way")
});

// SIGNUP ROUTE
app.post("/api/register-artist",(req, res) => {
    console.log("pass1")
  artistsController.signUp(req, res);
});

// ADD CONCERT
app.post("/api/concert",(req, res) => {
  console.log("concert")
concertsController.create(req, res);
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get("/:id",isAuthenticated, (req, res) => {
  db.Artist.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch(err => res.status(400).send(err));
});

// /////////////////////Concert/////////////////////


// Matches with "/api/products"
app
  .route("/api/concert")
  .get(concertsController.findAll)





}
