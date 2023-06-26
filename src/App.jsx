/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import { GlobalSettings } from "./App.style";
import React from "react";
import AppRouter from "./routes";

function App() {
  return (
    <GlobalSettings className="App">
      <AppRouter />
    </GlobalSettings>
  );
}

export default App;
