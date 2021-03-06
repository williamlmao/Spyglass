import React from "react";
import { useSelector } from "react-redux";
import "../fonts/pointpanther.otf";

const CollectionInfo = () => {
  const collection = useSelector((state) => state.storestate.collection);
  const status = useSelector((state) => state.storestate.assetStatus);

  if (status === "Loaded") {
    // TODO: Format traits
    const collectionTraits = [];
    for (const trait in collection.traits) {
      console.log(trait);

      collectionTraits.push(trait);
    }
    console.log(collectionTraits);

    return (
      <div>
        <div style={{ height: "300px" }}>
          <img className="collectionBanner" src={collection.bannerImageUrl} />
        </div>
        <div
          style={{
            alignContent: "center",
            textAlign: "center",
            width: "30%",
            margin: "auto",
          }}
        >
          <img style={{ borderRadius: "50%" }} src={collection.imageUrl}></img>
          <h2>{collection.name}</h2>
          <p>Number of Owners: {collection.numOwners}</p>
          <p>Average Price: {collection.averagePrice}</p>
          <p>Collection Size: {collection.collectionSize}</p>
          <p>Floor Price: {collection.floorPrice}</p>
          <p>Total Sales: {collection.totalSales}</p>
          <p>Thirty Day Average Price: {collection.thirtyDayAveragePrice}</p>
          <p>Thirty Day Volume: {collection.thirtyDayVolume}</p>
        </div>
        <ul></ul>
      </div>
    );
  } else {
    return null;
  }
};

export default CollectionInfo;
