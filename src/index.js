import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import App from "./App";
import {REPO_NAME} from "./constants/repo";

import s from "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={REPO_NAME}>
      <App />
    </BrowserRouter>
  </Provider>,
);
