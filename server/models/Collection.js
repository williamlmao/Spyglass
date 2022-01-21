const mongoose = require("mongoose");

const AssetContractSchema = mongoose.Schema({
  address: String,
  assetContractType: String,
  createdDate: String,
  name: String,
  nftVersion: String,
  openseaVersion: String,
  owner: Number,
  schemaName: String,
  symbol: String,
  totalSupply: String,
  description: String,
  externalLink: String,
  imageUrl: String,
  defaultToFiat: Boolean,
  onlyProxiedTransfers: Boolean,
  devBuyerFeeBasisPoints: String,
  devSellerFeeBasisPoints: String,
  openseaBuyerFeeBasisPoints: String,
  openseaSellerFeeBasisPoints: String,
  payoutAddress: String,
});

const PaymentTokenSchema = mongoose.Schema({
  externalId: Number,
  symbol: String,
  address: String,
  imageUrl: String,
  name: String,
  decimals: Number,
  ethPrice: Number,
  usdPrice: Number,
});

const CollectionStatsSchema = mongoose.Schema({
  oneDayVolume: Number,
  oneDayChange: Number,
  oneDaySales: Number,
  oneDayAveragePrice: Number,
  sevenDayVolume: Number,
  sevenDayChange: Number,
  sevenDaySales: Number,
  sevenDayAveragePrice: Number,
  thirtyDayVolume: Number,
  thirtyDayChange: Number,
  thirtyDaySales: Number,
  thirtyDayAveragePrice: Number,
  totalVolume: Number,
  totalSales: Number,
  totalSupply: Number,
  count: Number,
  numOwners: Number,
  averagePrice: Number,
  numReports: Number,
  marketCap: Number,
  floorPrice: Number,
});

// Price amounts in Ether
const CollectionSchema = mongoose.Schema({
  slug: String,
  name: String,
  description: String,
  shortDescription: String,
  twitterUsername: String,
  instagramUsername: String,
  mediumUsername: String,
  discordUrl: String,
  telegramUrl: String,
  wikiUrl: String,
  externalUrl: String,
  chatUrl: String,
  imageUrl: String,
  largeImageUrl: String,
  bannerImageUrl: String,
  isSubjectToWhiteList: Boolean,
  requireEmail: Boolean,
  payoutAddress: String,
  createdDate: String,
  defaultToFiat: Boolean,
  devBuyerFeeBasisPoints: String,
  devSellerFeeBasisPoints: String,
  openseaBuyerFeeBasisPoints: String,
  openseaSellerFeeBasisPoints: String,
  paymentTokens: [PaymentTokenSchema],
  stats: CollectionStatsSchema,
  primaryAssetContracts: [AssetContractSchema],
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
