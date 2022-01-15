import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import thunkMiddleware from "redux-thunk";

// composeEnhancers is needed for redux devtools

const actionSanitizer = (action) =>
  action.type === "FILE_DOWNLOAD_SUCCESS" && action.data
    ? { ...action, data: "<<LONG_BLOB>>" }
    : action;
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      actionSanitizer,
      stateSanitizer: (state) =>
        state.data ? { ...state, data: "<<LONG_BLOB>>" } : state,
    })
);

// const store = createStore(
//   reducers /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
