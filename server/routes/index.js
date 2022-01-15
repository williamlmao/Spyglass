const assetController = require("../controllers/assetController");
const collectionController = require("../controllers/collectionController");
const express = require("express");
const router = express.Router();

// Front end routes
router.get("/assets/:collectionSlug", assetController.getAssets);
router.get("/collections/:collectionSlug", collectionController.getCollection);

// Sync Routes
router.get("/sync_assets/:collectionSlug", assetController.syncAssets);
router.get(
  "/sync_collections/:collectionSlug",
  collectionController.syncCollection
);
router.get("/add_trait_valuations", assetController.addTraitValuations);

// Scrap Dev routes for updating collection / mongo queries
router.get("/update_assets", assetController.updateAssets);

module.exports = router;
