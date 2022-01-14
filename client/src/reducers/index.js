// Data from gsheets
// // Available templates
// // Currently selected template
// // ...

// // Data from user settings - isadmin is not admin

// // Data about current workflow - creating new taxonomy, applied filters

import { combineReducers } from "redux";

const storestate = (
  state = { view: "Flip", assets: {}, assetStatus: "No Address" },
  action
) => {
  switch (action.type) {
    case "SET_CONTRACT_ADDRESS":
      return { ...state, address: action.payload };
    case "LOAD_ASSETS":
      return { ...state, assets: action.payload };
    case "SET_ASSET_STATUS":
      return { ...state, assetStatus: action.payload };
    case "SET_VIEW":
      return { ...state, view: action.payload };
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
