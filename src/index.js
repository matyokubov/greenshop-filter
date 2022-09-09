import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Context } from "./context"
import App from './App';
import "./Cera.otf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App/>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);