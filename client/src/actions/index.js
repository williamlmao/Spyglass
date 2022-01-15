import filterAssets from "../helpers";

export const setContractAddress = async (dispatch, address) => {
  dispatch({
    type: "SET_CONTRACT_ADDRESS",
    payload: address,
  });
};

export const loadAssets = async (dispatch, assets) => {
  dispatch({
    type: "LOAD_ASSETS",
    payload: assets,
  });
};

export const setAssetStatus = async (dispatch, status) => {
  dispatch({
    type: "SET_ASSET_STATUS",
    payload: status,
  });
};

export const setView = async (dispatch, view) => {
  dispatch({
    type: "SET_VIEW",
    payload: view,
  });
};

export const setFlipIndex = async (dispatch, index) => {
  console.log("action index", index);
  dispatch({
    type: "SET_FLIP_INDEX",
    payload: index++,
  });
};

export const setFilteredAssets = async (dispatch, filteredAssets) => {
  dispatch({
    type: "SET_FILTERED_ASSETS",
    payload: filteredAssets,
  });
};

export const setSelectedFilters = async (dispatch, selectedFilters) => {
  dispatch({
    type: "SET_SELECTED_FILTERS",
    payload: selectedFilters,
  });
};
