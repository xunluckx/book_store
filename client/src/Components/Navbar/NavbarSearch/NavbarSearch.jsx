import styles from './NavbarSearch.module.scss';

const NavbarSearch = (props) => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navSearch}>
        <input
          className={styles.navSearchInput}
          placeholder="Найти..."
          type="search"
          id="search"
          name="search"
        />
        <button className={styles.navSearchButton} type="button">
          <img
            className={styles.navSearchImage}
            src="https://cdn.icon-icons.com/icons2/494/PNG/512/magnifier_icon-icons.com_48267.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default NavbarSearch;
