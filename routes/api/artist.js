const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");
const auth = require("../../config/auth");
const artistsController = require("../../controllers/usersController");

// LOGIN ROUTE
router.route("/artistlogin").post((req, res) => {
  auth
    .logArtistIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
router.route("/artistsignup").post((req, res) => {
  artistsController.signUp(req, res);
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.route("/:id").get(isAuthenticated, (req, res) => {
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

module.exports = router;
