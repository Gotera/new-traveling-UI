/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AppRouter from './routes';
import { GlobalSettings } from './App.style';

function App() {
  return (
    <GlobalSettings>
      <AppRouter />
    </GlobalSettings>
  );
}

export default App;
