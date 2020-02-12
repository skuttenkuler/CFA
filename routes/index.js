const path = require("path");
const router = require("express").Router();

const artists = require("./api/artist")
const users  = require('./api/user')
const concert = require('./api/concerts')
// API Routes

router.use("/artists", artists);
router.use("/users", users);
router.use("/concert", concert);
// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
