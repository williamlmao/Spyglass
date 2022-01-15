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
    console.log(asset.token_id);
    let assetDoc = await Asset.findOne({ tokenId: asset.token_id });
    if (!assetDoc) {
      assetDoc = new Asset({
        tokenId: asset.token_id,
        imageUrl: asset.imageUrl,
      });
    } else {
      // TOOD: Update logic?
    }
    await assetDoc.save();
  }
  res.json("Success");
};

exports.getAssets = async (req, res, _next) => {
  const assetDocs = await Asset.find({});
  res.json(assetDocs);
};
