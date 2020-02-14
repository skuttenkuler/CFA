const db = require("../models");
const axios = require("axios");
// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    db.Concert.find({})
      .then(results => {
        console.log("RESULTS: ", results);
        res.json(results);
      })
      .catch(err => console.log(err));
  },


  create: function(req, res) {
    console.log(req.body)
    db.Concert.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
