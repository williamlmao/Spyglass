import React from "react";
import "../styles.css";
import "../fonts/circularstd.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Gallery from "./Gallery";
import { loadAssets } from "../actions";
import Test from "./Test";
import CollectionInfo from "./CollectionInfo";

const App = () => {
  return (
    <div>
      <Header />
      {/* <CollectionInfo /> */}
      <Gallery />
    </div>
  );
};

export default App;
