import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyles } from './helpers/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Fragment>
);
