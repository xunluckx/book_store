import { NavLink } from 'react-router-dom';
import styles from './HeaderNavbar.module.scss';
import { useContext } from 'react';
import { Context } from '../../..';
import { SHOP_ROUTE } from '../../../utils/consts';

const HeaderNavbar = (props) => {
  const { user } = useContext(Context);
  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <NavLink to={SHOP_ROUTE} className={styles.HeaderNavLink}>
          Главная
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderNavbar;

//{
//  /*<nav className={styles.nav}>
//      <div className={styles.navItem}>
//        <NavLink
//          to={SHOP_ROUTE}
//          className={(navData) =>
//            navData.isActive ? styles.active : styles.item
//          }
//        >
//          Главная
//        </NavLink>
//      </div>
//      <div className={styles.navItem}>
//        <NavLink
//          to="/news"
//          className={(navData) =>
//            navData.isActive ? styles.active : styles.item
//          }
//        >
//          Новинки
//        </NavLink>
//      </div>
//      <div className={styles.navItem}>
//        <NavLink
//          to="/about"
//          className={(navData) =>
//            navData.isActive ? styles.active : styles.item
//          }
//        >
//          О нас
//        </NavLink>
//      </div>
//      <div className={styles.navItem}>
//        <NavLink
//          to="/contacts"
//          className={(navData) =>
//            navData.isActive ? styles.active : styles.item
//          }
//        >
//          Контакты
//        </NavLink>
//      </div>
//    </nav>*/
//}
