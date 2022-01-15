const axios = require("axios");
const Asset = require("../models/Asset");
const csv = require("csv-parser");
const fs = require("fs");

const DATA_DIR = "../data";

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
      let assetDoc = await Asset.findOne({
        collectionSlug: collectionSlug,
        tokenId: asset.token_id,
      });
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

exports.addPriceData = async (req, res, next) => {
  const csvFileName = req.params.fileName;
  const filePath = `${DATA_DIR}/${csvFileName}.csv`;
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", async (row) => {
      // TODO: Reformat CSV columns before analysis export instead of wrangling again here, just doing this to ship quickly
      const tokenId = row.unique_id.replace(/\D/g, "");
      const collectionSlug =
        row.collection_name === "BoredApeYachtClub"
          ? "boredapeyachtclub"
          : "doodles-official";

      let assetDoc = await Asset.findOne({
        collectionSlug: collectionSlug,
        tokenId: tokenId,
      });

      if (assetDoc) {
        assetDoc.saleListed = true;
        assetDoc.buyNowPrice = row.current_price;
        assetDoc.predictedPrice = row.predicted_price;
        assetDoc.valuation = row.pricing;
        assetDoc.save();
        console.log(`Finished updating asset ${collectionSlug}-${tokenId}`);
      } else {
        console.error(
          `Asset not found! Collection: ${collectionSlug}, TokenID: ${tokenId}`
        );
      }
    })
    .on("end", () => {
      console.log("Finished Reading CSV");
    });
  res.json("Finished Updating Price Data");
};

// Dev function to update docs
exports.updateAssets = async (req, res, next) => {
  const assets = await Asset.find({});
  for (const asset of assets) {
    asset.liked = false;
    asset.rating = null;
    asset.valuation = asset.valuation ? asset.valuation : null;
    asset.buyNowPrice = asset.buyNowPrice ? asset.buyNowPrice : null;
    asset.predictedPrice = asset.predictedPrice ? asset.predictedPrice : null;

    await asset.save();
    console.log(`Updated asset ${asset.collectionSlug}#${asset.tokenId} `);
  }
  res.json("finished");
};
