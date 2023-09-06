import { useState } from 'react';
import styles from './LeftSide.module.scss';

import { useTranslation } from 'react-i18next';

const LeftSide = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('UAH');

  const { i18n } = useTranslation();

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.leftSide}>
      <div className={styles.langButtons}>
        <button
          onClick={() => {
            changeLanguage('ru');
          }}
          href="#"
          className={styles.langRu}
        >
          RU
        </button>
        <button
          onClick={() => {
            changeLanguage('ua');
          }}
          href="#"
          className={styles.langUa}
        >
          UA
        </button>
      </div>

      <div className={styles.currencyWrapper}>
        <select
          className={styles.currencyContent}
          id="currencySelect"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
};

export default LeftSide;
