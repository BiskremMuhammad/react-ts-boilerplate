/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description Application Container
 */

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, reduxPersistor } from "./Redux/store";
import { MainLayout } from "./Layout/Main";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={reduxPersistor}>
        <MainLayout />
      </PersistGate>
    </Provider>
  );
}

export default App;
