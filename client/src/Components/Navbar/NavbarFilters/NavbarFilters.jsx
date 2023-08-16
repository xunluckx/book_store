import styles from './NavbarFilters.module.scss';
import PriceFilter from './PriceFilter/PriceFilter';

const NavbarFilters = () => {
  return (
    <div className={styles.filtersWrapper}>
      <nav className={styles.nav}>
        <div className={styles.filtersTitle}>Фильтры</div>
        <PriceFilter />
      </nav>
    </div>
  );
};

export default NavbarFilters;
