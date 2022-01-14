const mongoose = require("mongoose");

const schema = mongoose.Schema({
  tokenId: String,
  imageUrl: String,
});

module.exports = mongoose.model("Asset", schema);
