import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'; 
import BasketContext from './Context/BasketContext.jsx';
import ContextProvider, { WishlistContext } from './Context/WishlistProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
 <BasketContext>
   <HelmetProvider>
    <App />
  </HelmetProvider>
 </BasketContext>
 </ContextProvider>
)
