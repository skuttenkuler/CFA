
//ARTIST MODEL
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const ArtistSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Execute before each user.save() call
ArtistSchema.pre("save", function(callback) {
  let artist = this;

  // Break out if the password hasn't changed
  if (!artist.isModified("password")) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(artist.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      artist.password = hash;
      callback();
    });
  });
});

ArtistSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
