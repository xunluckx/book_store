import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import HeaderLine from './HeaderLine/HeaderLine';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';

const Header = () => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.headerWrapper}>
      <HeaderLine />
      <HeaderInfo />
      <div>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.headerLogo}>
              <img
                src="https://images.prom.ua/2164722640_w160_h100_knizhkova-baza.jpg"
                alt="logo"
              />
            </div>
            <div className={styles.headerTitle}>{i18n.t('header.title')}</div>
          </div>
          <HeaderNavbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
