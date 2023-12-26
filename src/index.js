import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {appRouter} from './App';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
