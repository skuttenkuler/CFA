//CONCERT MODEL
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConcertSchema = new Schema({
  artist: String,
  venue: String,
  city: String,
  state: String,
  date: String,
  post_date: { type: Date, default: Date.now }
});

const Concert = mongoose.model("Concert", ConcertSchema);

module.exports = Concert;
