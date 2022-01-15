import React, { useEffect, useState } from "react";
import "../styles.css";
import "../fonts/circularstd.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ViewSelection from "./ViewSelection";
import Gallery from "./Gallery";
import { loadAssets } from "../actions";
import FilterSelection from "./FilterSelection";

const App = () => {
  return (
    <div>
      <Header />
      <ViewSelection />
      <FilterSelection />
      <Gallery />
    </div>
  );
};

export default App;
