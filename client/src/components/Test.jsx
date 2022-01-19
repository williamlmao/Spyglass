import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const assets = useSelector((state) => state.storestate.assets);
  return <div>{JSON.stringify(assets)}</div>;
};

export default Test;
