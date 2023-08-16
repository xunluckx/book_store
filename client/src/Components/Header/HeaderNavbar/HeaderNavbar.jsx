import { NavLink } from 'react-router-dom';
import styles from './HeaderNavbar.module.scss';

const HeaderNavbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <NavLink
          to="/main"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Главная
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Новинки
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to="/about"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          О нас
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to="/contacts"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Контакты
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
