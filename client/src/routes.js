import Admin from './Pages/AdminPage/Admin';
import Auth from './Pages/Auth/Auth';
import CART from './Pages/Cart/Cart';
import BookPage from './Pages/BookPage/BookPage';
import BooksList from './Pages/BooksList/BooksList';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  BOOK_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  ABOUT_US_ROUTE,
  CONTACTS_ROUTE,
  REFUNDS_ROUTE,
} from './utils/consts';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contacts from './Pages/Contacts/Contacts';
import Refunds from './Pages/Refunds/Refunds';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: CART_ROUTE,
    Component: CART,
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

  {
    path: ABOUT_US_ROUTE,
    Component: AboutUs,
  },

  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },

  {
    path: REFUNDS_ROUTE,
    Component: Refunds,
  },
];
