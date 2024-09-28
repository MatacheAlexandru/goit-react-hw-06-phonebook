// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Schimbă importul
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./App";

// Caută elementul root și folosește createRoot în loc de ReactDOM.render
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
