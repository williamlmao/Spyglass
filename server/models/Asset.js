const mongoose = require("mongoose");

const TraitSchema = mongoose.Schema({
  traitType: String,
  value: String,
  traitCount: Number,
  averageTraitPrice: Number,
  medianTraitPrice: Number,
  rarity: Number, // % of collection that has this trait
  valuation: String,
  displayType: String,
  extraClean: Boolean, // Asset has less traits than normal in the collection
  maxValue: Number, // TODO: Not sure if this is number, Undocumented and API response always null
});

const AccountSchemaWithUserObject = mongoose.Schema({
  user: { userName: String },
  profileImgUrl: String,
  address: String,
  config: String,
  isWhale: Boolean, // Custom field,
  isCeleb: Boolean, // Custom field
});

// OpenSea has a weird API response where makers/takers don't follow their regular account model schema and use a number instead of object with username for user.
const AccountSchemaWithUserId = mongoose.Schema({
  user: Number,
  profileImgUrl: String,
  address: String,
  config: String,
});

const SellOrderSchema = mongoose.Schema({
  createdDate: String,
  closingDate: String,
  closingExtendable: Boolean,
  expirationTime: Number,
  listingTime: Number,
  orderHash: Number,
  metadata: {
    asset: {
      id: String,
      address: String,
    },
    schema: String,
  },
  exchange: String,
  maker: AccountSchemaWithUserId,
  taker: AccountSchemaWithUserId,
  currentPrice: String,
  currentBounty: String,
  bountyMultiple: String,
  makerRelayerFee: String,
  takerRelayerFee: String,
  makerProtocolFee: String,
  takerProtocolFee: String,
  makerReferrerFee: String,
  feeRecipient: AccountSchemaWithUserId,
  feeMethod: Number,
  slide: Number,
  saleKind: Number,
  target: String,
  howToCall: Number,
  calldata: String,
  replacementPattern: String,
  staticTarget: String,
  staticExtraData: String,
  paymentTokenContract: {
    id: Number,
    symbol: String,
    address: String,
    imageUrl: String,
    name: String,
    decimals: Number,
    ethPrice: String,
    usdPrice: String,
  },
  basePrice: String,
  extra: String,
  quantity: String,
  salt: String,
  v: Number,
  r: String,
  s: String,
  approvedOnChain: Boolean,
  cancelled: Boolean,
  finalized: Boolean,
  markedInvalid: Boolean,
  prefixedHash: String,
});

const AssetSchema = mongoose.Schema({
  externalId: Number,
  name: String,
  description: String,
  backgroundColor: String,
  tokenId: Number,
  imageUrl: String,
  imagePreviewUrl: String,
  imageThumbnailUrl: String,
  imageOriginalUrl: String,
  animationUrl: String,
  animationOriginalUrl: String,
  externalLink: String,
  permaLink: String,
  assetContract: AssetContractSchema,
  numSales: Number,
  saleListed: Boolean,
  buyNowPrice: Number,
  collectionSlug: String,
  decimals: Number,
  tokenMetaDeta: String,
  owner: AccountSchemaWithUserObject,
  creator: AccountSchemaWithUserObject,
  predictedPrice: Number,
  valuation: String,
  liked: Boolean, // TODO: This won't work, need to support likes accross our website.
  rating: Number,
  lastSale: mongoose.Schema.Types.Mixed, // Too lazy to type this out rn, object would be exactly the same as from opensea response
  traits: [TraitSchema],
  topBid: String,
  listingDate: String,
  isPresale: Boolean,
  transferFee: String,
  transferFeePaymentToken: String,
  rarityScore: Number,
  sellOrders: [SellOrderSchema],
});

module.exports = mongoose.model("Asset", AssetSchema);
