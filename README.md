# Concerts For All
An application for artists to post their upcoming shows and fans to see upcoming concerts!


![Gif](public/assets/images/CFA.gif)

## Try it out!

[Concerts For All!](https://ancient-meadow-26106.herokuapp.com/)

## Technologies Used
* [NodeJS](https://nodejs.org)
* [Bootstrap](https://getbootstrap.com)
* [NPM Packages](https://npmjs.com)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Heroku](https://devcenter.heroku.com/categories/reference)

## Code Snippets

These snippets show my Concert and Artist Schema for the app.
```Javascript
//CONCERT SCHEMA
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
```


```Javascript
//ARTIST SCHEMA
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

```


# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)
- Kerwin Hy
    - [Linkedin](https://www.linkedin.com/in/kerwinhy/)

