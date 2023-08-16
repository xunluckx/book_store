import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMenu.module.scss';

const NavbarMenu = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.nav}>
        <div className={styles.navTitle}>Меню</div>
        <button className={styles.collapseButton} onClick={toggleCollapse}>
          {isCollapsed ? (
            <img
              className={styles.collapseButtonOpen}
              src="https://cdn.icon-icons.com/icons2/1206/PNG/512/1491254405-plusaddmoredetail_82972.png"
              alt=""
            />
          ) : (
            <img
              className={styles.collapseButtonClose}
              src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904666-calculate-close-delete-hide-minimize-minus-remove_122516.png"
              alt=""
            />
          )}
        </button>
        {isCollapsed ? null : (
          <ul>
            <li>
              <NavLink
                to="/history"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                История
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ZNO"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                ЗНО
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/English"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                Английский
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Programming"
                className={(navData) =>
                  navData.isActive ? styles.active : styles.item
                }
              >
                Программирование
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavbarMenu;
