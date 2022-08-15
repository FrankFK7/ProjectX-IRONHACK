// models/Location.model.js

const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {
    price: Number,
    description: String,
    street: String,
    rating: Number
  },
  {
    timestamps: true
  }
);
const User=model("User",userSchema);

module.exports = User
