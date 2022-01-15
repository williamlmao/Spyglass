const assetController = require("../controllers/assetController");
const express = require("express");
const axios = require("axios");
const router = express.Router();
const Asset = require("../models/Asset");

router.get(
  "/index_collection/:collectionSlug",
  assetController.indexCollection
);
// TODO: params
router.get("/assets", assetController.getAssets);

module.exports = router;
