const axios = require("axios");
const Asset = require("../models/Asset");

const requestAssets = async () => {
  try {
    const res = await axios.get(
      "https://api.opensea.io/api/v1/assets?collection=doodles-official"
    );
    return res.data.assets;
  } catch (error) {
    console.error(error);
  }
};

exports.indexCollection = async (req, res, next) => {
  let assets = await requestAssets();
  for (const asset of assets) {
    let assetDoc = await Asset.findOne({ tokenId: asset.token_id });
    console.log("-------------------------------------------------");
    console.log(asset);
    const traits = asset.traits.map((trait) => ({
      traitType: trait.trait_type,
      value: trait.value,
      traitCount: trait.trait_count,
    }));
    // TODO: Find and add collection mapping & stats
    if (!assetDoc) {
      assetDoc = new Asset({
        tokenId: asset.token_id,
        imageUrl: asset.image_url,
        numSales: asset.num_sales,
        name: asset.name,
        description: asset.description, // Tends to be same as collection description
        saleListed: asset.sell_orders !== null, // TODO: differentiate between buy now / auction
        traits: traits,
      });
    } else {
      // TOOD: Logic to update assets if they exist?
    }
    await assetDoc.save();
  }
  res.json("Success");
};

exports.getAssets = async (req, res, _next) => {
  const assetDocs = await Asset.find({});
  res.json(assetDocs);
};
