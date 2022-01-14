const assetController = require("../controllers/assetController");
const express = require("express");
const axios = require("axios");
const router = express.Router();
const Asset = require("../models/Asset");

// TODO: Collection slug or contract address query param?
router.get("/index_collection", assetController.indexCollection);
router.get("/assets", assetController.getAssets);

module.exports = router;
