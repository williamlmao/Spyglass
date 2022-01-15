const mongoose = require("mongoose");

// Price amounts in Ether
const CollectionSchema = mongoose.Schema({
  slug: String,
  name: String,
  description: String,
  twitterUsername: String,
  discordUrl: String,
  imageUrl: String,
  largeImageUrl: String,
  bannerImageUrl: String,
  numOwners: Number,
  totalSupply: Number,
  marketCap: Number,
  floorPrice: Number,
  averagePrice: Number,
  thirtyDayAveragePrice: Number,
  totalSales: Number,
  oneDayVolume: Number,
  sevenDayVolume: Number,
  thirtyDayVolume: Number,
  traits: mongoose.Schema.Types.Mixed,
});

/*
Traits object: 
{
    traitType: {
        "value": count
    }
}
*/

module.exports = mongoose.model("Collection", CollectionSchema);
