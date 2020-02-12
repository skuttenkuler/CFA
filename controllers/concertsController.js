const db = require("../models");
const axios = require("axios");
// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    if (req.query.q === "") {
      req.query.q = "conc";
    }
    axios
      .get(
        `https://api.bestbuy.com/v1/products(longDescription=${
          req.query.q
        }*)?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
        console.log("RESULTS: ", results.data);
        res.json([...results.data.products]);
      })
      .catch(err => console.log(err));
  },
  
  findById: function(req, res) {
    db.Concert.find();
    return res.json();
  },
  create: function(req, res) {
    db.Concert.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
