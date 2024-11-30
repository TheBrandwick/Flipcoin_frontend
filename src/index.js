import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletDisconnectedError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import toast, { Toaster } from 'react-hot-toast';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapters';

const tronLinkAdapter = new TronLinkAdapter();

function onError(e) {
  if (e instanceof WalletNotFoundError) {
    toast.error(e.message);
  } else if (e instanceof WalletDisconnectedError) {
    toast.error(e.message);
  } else {
    toast.error(e.message);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap the entire app with WalletProvider */}
    <WalletProvider adapters={[tronLinkAdapter]} onError={(e) => console.error('Wallet Error:', e)}>
      <Toaster /> {/* To display toast notifications */}
      <App />
    </WalletProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
