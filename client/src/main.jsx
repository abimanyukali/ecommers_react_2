import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import ShopContextProvider from './Context/shopContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
