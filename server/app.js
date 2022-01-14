const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index.js");

const PORT = 4200;
const MONGO_CONNECTION_URI = `mongodb+srv://admin:admin@cluster0.qbcla.mongodb.net/seernft?retryWrites=true&w=majority`;

mongoose.connect(MONGO_CONNECTION_URI, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(express.json());
  app.use("/api", routes);
  app.listen(PORT, () => {
    console.log(`Server has started! Running on port ${PORT}`);
  });
});
