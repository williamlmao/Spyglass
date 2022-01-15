const axios = require("axios");
const Asset = require("../models/Asset");

const requestAssets = async (collectionSlug, offset = 0, limit = 50) => {
  try {
    const res = await axios.get(
      `https://api.opensea.io/api/v1/assets?collection=${collectionSlug}&limit=${limit}&offset=${offset}`
    );
    return res.data.assets;
  } catch (error) {
    console.error(error);
  }
};

exports.getAssets = async (req, res, _next) => {
  const collectionSlug = req.params.collectionSlug;
  const limit = req.query.limit ?? 10000;
  const offset = req.query.offset ?? 0;
  const assetDocs = await Asset.find({ collectionSlug: collectionSlug })
    .sort("tokenId")
    .limit(limit)
    .skip(offset)
    .exec();
  res.json(assetDocs);
};

exports.syncAssets = async (req, res, next) => {
  const collectionSlug = req.params.collectionSlug;
  let offset = 0;
  let assets;
  let totalAssetsRetrieved = 0;
  let totalAlreadyFoundAssets = 0;
  let newAssets = 0;
  // OpenSea API offset limit is 10,000
  while (offset <= 10000) {
    console.log(`offset: ${offset}`);
    assets = await requestAssets(collectionSlug, offset);
    for (const asset of assets) {
      totalAssetsRetrieved += 1;
      console.log(asset.token_id);
      let assetDoc = await Asset.findOne({ tokenId: asset.token_id });
      // console.log("-------------------------------------------------");
      // console.log(asset);
      const traits = asset.traits.map((trait) => ({
        traitType: trait.trait_type,
        value: trait.value,
        traitCount: trait.trait_count,
      }));
      if (!assetDoc) {
        newAssets += 1;
        assetDoc = new Asset({
          collectionSlug: collectionSlug,
          tokenId: Number(asset.token_id),
          imageUrl: asset.image_url,
          numSales: asset.num_sales,
          name: asset.name,
          description: asset.description, // Tends to be same as collection description
          saleListed: asset.sell_orders !== null, // TODO: differentiate between buy now / auction
          traits: traits,
        });
      } else {
        totalAlreadyFoundAssets += 1;
        // TOOD: Logic to update assets if they exist
        console.log("in the else case");
      }
      await assetDoc.save();
    }
    console.log(`totalAssetsRetrieved: ${totalAssetsRetrieved}`);
    console.log(`totalAlreadyFoundAssets: ${totalAlreadyFoundAssets}`);
    console.log(`newAssets: ${newAssets}`);
    offset += 50;
  }

  res.json("Success, Sync Complete!");
};

exports.addTraitValuations = async (req, res, next) => {
  res.json("Success, Added Trait Valuations!");
};

// Dev function to update docs
exports.updateAssets = async (req, res, next) => {
  const assets = await Asset.find().limit(5);
  console.log(assets);
  let count = 0;
  for (const asset of assets) {
    console.log(typeof asset.tokenId);
    console.log(asset);
    // console.log(count);
    // asset.tokenId = Number(asset.tokenId);
    // await asset.save();
    // count++;
  }
  res.json("finished");
};
