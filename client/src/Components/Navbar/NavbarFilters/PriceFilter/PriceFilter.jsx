import { useTranslation } from 'react-i18next';
import styles from './PriceFilter.module.scss';

const PriceFilter = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <div className={styles.priceWrapper}>
        <div className={styles.priceTitle}>{i18n.t('navbar.priceTitle')}</div>
        <div className={styles.priceFilter}>
          <input
            placeholder={i18n.t('navbar.priceHolder.from')}
            className={styles.priceInputFrom}
            type="number"
          />
          <input
            placeholder={i18n.t('navbar.priceHolder.To')}
            className={styles.priceInputUpTo}
            type="number"
          />
          <div>
            <button className={styles.priceSearchButton}>
              <img
                className={styles.priceSearchImage}
                src="https://cdn.icon-icons.com/icons2/494/PNG/512/magnifier_icon-icons.com_48267.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
