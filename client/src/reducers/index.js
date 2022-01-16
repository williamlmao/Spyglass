// Data from gsheets
// // Available templates
// // Currently selected template
// // ...

// // Data from user settings - isadmin is not admin

// // Data about current workflow - creating new taxonomy, applied filters

import { combineReducers } from "redux";

const storestate = (
  state = {
    view: "Flip",
    assets: [],
    assetStatus: "No Address",
    flipIndex: 0,
    selectedFilters: {},
    filteredAssets: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_CONTRACT_ADDRESS":
      return { ...state, address: action.payload };
    case "INITIALIZE_COLLECTION":
      return { ...state, collection: action.payload };
    case "LOAD_INITIAL_ASSETS":
      return { ...state, assets: action.payload };
    case "LOAD_ASSETS":
      return { ...state, assets: state.assets.concat(action.payload) };
    case "INITIALIZE_FILTERED_ASSETS":
      return { ...state, filteredAssets: state.assets };
    case "SET_FILTERED_ASSETS":
      return { ...state, filteredAssets: action.payload };
    case "SET_ASSET_STATUS":
      return { ...state, assetStatus: action.payload };
    case "SET_VIEW":
      return { ...state, view: action.payload };
    case "SET_FLIP_INDEX":
      return { ...state, flipIndex: action.payload };
    case "SET_SELECTED_FILTERS":
      return { ...state, selectedFilters: action.payload };
    case "LIKE_ASSET":
      let updatedAssets = [...state.assets];
      updatedAssets[action.payload].liked = true;
      return { ...state, assets: updatedAssets };
    case "RATE_ASSET":
      let updatedAssets2 = [...state.assets];
      console.log(action.payload);
      console.log("#", action.payload.tokenId);
      updatedAssets2[action.payload.tokenId].rating = action.payload.rating;
      return { ...state, assets: updatedAssets2 };
    default:
      return state;
  }
};

// const loadAssets = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const view = (state = {}, action) => {
//   switch (action.type) {
//     case "SET_VIEW":
//       return { ...state, view: action.payload };
//     default:
//       return state;
//   }
// };

export default combineReducers({ storestate });
