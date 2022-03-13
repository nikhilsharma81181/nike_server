const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  comics: String,
});

module.exports = mongoose.model("users", userSchema);
