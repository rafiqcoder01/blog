import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import Layout from './Layout/Layout';
import './index.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


