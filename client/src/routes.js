import Admin from './Pages/AdminPage/Admin';
import Auth from './Pages/Auth/Auth';
import Basket from './Pages/Basket/Baset';
import BookPage from './Pages/BookPage/BookPage';
import BooksList from './Pages/BooksList/BooksList';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  BOOK_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: BooksList,
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },

  {
    path: BOOK_ROUTE + '/:id',
    Component: BookPage,
  },
];
