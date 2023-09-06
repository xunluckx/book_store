import { NavLink } from 'react-router-dom';
import styles from './HeaderNavbar.module.scss';
import {
  ABOUT_US_ROUTE,
  CONTACTS_ROUTE,
  REFUNDS_ROUTE,
  SHOP_ROUTE,
} from '../../../utils/consts';
import { useTranslation } from 'react-i18next';

const HeaderNavbar = (props) => {
  const { i18n } = useTranslation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <NavLink
          to={SHOP_ROUTE}
          style={{ color: '#000' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {i18n.t('header.main')}
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to={ABOUT_US_ROUTE}
          style={{ color: '#000' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {i18n.t('header.aboutUs')}
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to={CONTACTS_ROUTE}
          style={{ color: '#000' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {i18n.t('header.contacts')}
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to={REFUNDS_ROUTE}
          style={{ color: '#000' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {i18n.t('header.refunds')}
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
