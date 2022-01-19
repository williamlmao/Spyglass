import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../fonts/circularstd.ttf";
import "../styles.css";
import Gallery from "./Gallery";
import Header from "./Header";

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
