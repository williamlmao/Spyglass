export const endpoint = (type, collectionSlug, limit, offset) => {
  if (process.env.NODE_ENV === "development") {
    if (limit) {
      return `http://localhost:4200/api/${type}/${collectionSlug}?limit=${limit}&offset=${offset}`;
    } else {
      return `http://localhost:4200/api/${type}/${collectionSlug}`;
    }
  } else {
    //todo: update prod
    return `https://spyglass-nft.herokuapp.com/api/${type}/${collectionSlug}`;
  }
};

// Filters by status, price, and traits
export const filterAssets = (assets, filters) => {
  let filteredAssets = [...assets];
  // Get filter keys
  const filterKeys = Object.keys(filters);

  // console.log("filter keus", filterKeys);
  // Filter the assets by one key at a time
  filterKeys.forEach((key) => {
    filteredAssets = filteredAssets.filter((asset) => {
      let showAsset = false;
      if (key === "current_price") {
        console.log("current price");
      } else {
        let traits = asset.traits;

        traits.forEach((trait) => {
          if (filters[key].includes(trait.value.toLowerCase())) {
            showAsset = true;
          }
        });
      }
      return showAsset;
    });
  });
  console.log("filtered assets helper", filteredAssets);
  return filteredAssets;
};
