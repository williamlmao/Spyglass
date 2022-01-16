const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 4200;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const MONGO_CONNECTION_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qbcla.mongodb.net/seernft?retryWrites=true&w=majority`;

mongoose.connect(MONGO_CONNECTION_URI, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);
  app.listen(PORT, () => {
    console.log(`Server has started! Running on port ${PORT}`);
  });
});
