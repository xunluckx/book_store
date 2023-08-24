import React, { useState } from 'react';
import styles from './NavbarMenu.module.scss';
import { observer } from 'mobx-react-lite';
import TypesMenu from './TypesMenu/TypesMenu';
import GenresMenu from './GenresMenu/GenresMenu';

const NavbarMenu = observer(() => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.nav}>
        <div className={styles.navTitle}>Меню</div>
        <div className={styles.item}>
          <button
            className={styles.navbarCollapseButton}
            onClick={toggleCollapse}
          >
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
        </div>
        <div className={styles.navContentWrapper}>
          {isCollapsed ? (
            <div>
              <div>Типы</div>
              <TypesMenu />
            </div>
          ) : null}

          {isCollapsed ? (
            <div>
              <div>Жанры</div>
              <GenresMenu />
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
});

export default NavbarMenu;
