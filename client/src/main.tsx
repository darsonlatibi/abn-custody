import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./stores/store.js";
import App from "./app/App";
import AuthInitializer from "./components/auth/AuthInitializer";

import "./styles/index.css";
import { Provider } from "react-redux";
import MidtransLoader from "./pages/support/MidtransLoader.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthInitializer />
        <MidtransLoader>
          <App />
        </MidtransLoader>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
