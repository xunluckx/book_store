import styles from './Navbar.module.scss';
import NavbarSearch from './NavbarSearch/NavbarSearch';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarFilters from './NavbarFilters/NavbarFilters';
import { useContext } from 'react';
import { Context } from '../..';

const Navbar = (props) => {
  const { user } = useContext(Context);

  return (
    <div className={styles.navbarWrapper}>
      <NavbarSearch />
      <NavbarMenu />
      <NavbarFilters />
    </div>
  );
};

export default Navbar;
