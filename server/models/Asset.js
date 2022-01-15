const mongoose = require("mongoose");

const TraitSchema = mongoose.Schema({
  traitType: String,
  value: String,
  traitCount: Number,
  averageTraitPrice: Number,
  valuation: String,
});

const AssetSchema = mongoose.Schema({
  name: String,
  description: String,
  tokenId: Number,
  imageUrl: String,
  numSales: Number,
  saleListed: Boolean,
  buyNowPrice: Number,
  collectionSlug: String,
  traits: [TraitSchema],
});

module.exports = mongoose.model("Asset", AssetSchema);
