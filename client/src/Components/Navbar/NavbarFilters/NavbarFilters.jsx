import { useTranslation } from 'react-i18next';
import styles from './NavbarFilters.module.scss';
import PriceFilter from './PriceFilter/PriceFilter';

const NavbarFilters = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.filtersWrapper}>
      <nav className={styles.nav}>
        <div className={styles.filtersTitle}>{i18n.t('navbar.filters')}</div>
        <PriceFilter />
      </nav>
    </div>
  );
};

export default NavbarFilters;
