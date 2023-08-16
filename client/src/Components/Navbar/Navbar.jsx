import styles from './Navbar.module.scss';
import NavbarSearch from './NavbarSearch/NavbarSearch';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarFilters from './NavbarFilters/NavbarFilters';

const Navbar = (props) => {
  return (
    <div className={styles.navbarWrapper}>
      <NavbarSearch />
      <NavbarMenu />
      <NavbarFilters />
    </div>
  );
};

export default Navbar;
