import styles from './PriceFilter.module.scss';

const PriceFilter = () => {
  return (
    <div>
      <div className={styles.priceWrapper}>
        <div className={styles.priceTitle}>Цена</div>
        <div className={styles.priceFilter}>
          <input
            placeholder="От 30 грн"
            className={styles.priceInputFrom}
            type="number"
          />
          <input
            placeholder="До 1000 грн"
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
