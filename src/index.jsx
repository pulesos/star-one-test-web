import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './mobile.scss'
import App from './App';
import LoginStore from './store/userStore';
import ProductStore from './store/productStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        login: new LoginStore(),
        product: new ProductStore(),
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);

