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
