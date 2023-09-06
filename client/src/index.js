import React, { Suspense, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import BookStore from './store/BookStore';
import CartStore from './store/CartStore';
import './i18n';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Context.Provider
        value={{
          user: new UserStore(),
          book: new BookStore(),
          cart: new CartStore(),
        }}
      >
        <App />
      </Context.Provider>
    </Suspense>
  </React.StrictMode>
);
