import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, {persistor} from "./redux";
import {Context} from "./utils/Context";
import { PersistGate } from 'redux-persist/integration/react'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
           <BrowserRouter>
                  <Context>
                      <PersistGate loading={null} persistor={persistor}>
                              <App />
                      </PersistGate>
                  </Context>
           </BrowserRouter>
   </Provider>
);

