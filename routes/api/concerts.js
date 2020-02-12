const router = require("express").Router();
const concertsController = require("../../controllers/concertsController");

// Matches with "/api/products"
router
  .route("/")
  .get(concertsController.findAll)
  .post(concertsController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(concertsController.findById)
  


module.exports = router;
