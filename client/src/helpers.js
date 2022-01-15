// Filter by status
// Need to get all traits

// Filters the asset list by a filter key and a condition

// const filters = {
//     Hats: ["Crown", "Horns"],
//     // Current price is min - max
//     current_price: [0, 50000],
//   };

// Filters by status, price, and traits
export const filterAssets = (assets, filters) => {
  console.log("assets", assets);
  let filteredAssets = [...assets];
  // Get filter keys
  const filterKeys = Object.keys(filters);
  // Filter the assets by one key at a time
  filterKeys.forEach((key) => {
    console.log("filtered assets", filteredAssets);
    filteredAssets = filteredAssets.filter((asset) => {
      let showAsset = false;
      if (key === "current_price") {
        console.log("current price");
      } else {
        let traits = asset.traits;

        traits.forEach((trait) => {
          if (filters[key].includes(trait.value)) {
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
