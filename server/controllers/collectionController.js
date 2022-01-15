const axios = require("axios");
const Collection = require("../models/Collection");

const requestCollection = async (collectionSlug) => {
  try {
    const res = await axios.get(
      `https://api.opensea.io/api/v1/collection/${collectionSlug}`
    );
    return res.data.collection;
  } catch (error) {
    console.error(error);
  }
};

exports.getCollection = async (req, res, _next) => {
  const collectionSlug = req.params.collectionSlug;
  const collectionDoc = await Collection.findOne({ slug: collectionSlug });
  // TOOD: Remove hardcoded collectionSize
  res.json({ ...collectionDoc._doc, collectionSize: 10000 });
};

exports.syncCollection = async (req, res, next) => {
  const collectionSlug = req.params.collectionSlug;
  const collection = await requestCollection(collectionSlug);

  let collectionDoc = await Collection.findOne({ slug: collectionSlug });
  if (!collectionDoc) {
    collectionDoc = new Collection({
      slug: collectionSlug,
      name: collection.name,
      description: collection.description,
      discordUrl: collection.discordUrl,
      imageUrl: collection.image_url,
      largeImageUrl: collection.large_image_url,
      bannerImageUrl: collection.banner_image_url,
      numOwners: collection.stats.num_owners,
      totalSupply: collection.stats.total_supply,
      marketCap: collection.stats.market_cap,
      floorPrice: collection.stats.floor_price,
      averagePrice: collection.stats.average_price,
      thirtyDayAveragePrice: collection.stats.thirty_day_average_price,
      totalSales: collection.stats.total_sales,
      totalSupply: collection.stats.total_supply,
      oneDayVolume: collection.stats.one_day_volume,
      sevenDayVolume: collection.stats.seven_day_volume,
      thirtyDayVolume: collection.stats.thirty_day_volume,
      traits: collection.traits,
    });
    await collectionDoc.save();
  } else {
    // TODO: Update existing doc
  }
  res.json("Success, Collection Sync Complete!");
};
