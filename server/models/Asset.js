const mongoose = require("mongoose");

const CollectionSchema = mongoose.Schema({
  floorPrice: Number,
  averagePrice: Number,
  oneDayVolume: Number,
  sevenDayVolume: Number,
  thirtyDayVolume: Number,
  description: String,
  slug: String,
});

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
  tokenId: String,
  imageUrl: String,
  numSales: Number,
  saleListed: Boolean,
  buyNowPrice: Number,
  nftCollection: CollectionSchema,
  traits: [TraitSchema],
});

module.exports = mongoose.model("Asset", AssetSchema);
