import { useTranslation } from 'react-i18next';
import styles from './HeaderInfo.module.scss';

const HeaderInfo = () => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.headerInfoWrapper}>
      <div className={styles.container}>
        <div className={styles.streetName}>
          Проспект Пушкина, дом Колотушкина
        </div>
        <div className={styles.phoneNumber}>{i18n.t('headerInfo.number')}</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
