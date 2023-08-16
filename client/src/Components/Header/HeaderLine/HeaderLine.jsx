import styles from './HeaderLine.module.scss';

const HeaderLine = () => {
  return (
    <div className={styles.headerLineWrapper}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.langButtons}></div>
          <button href="#" className={styles.langRu}>
            RU
          </button>
          <button href="#" className={styles.langUa}>
            UA
          </button>
        </div>
        <div className={styles.rightSide}>
          <button href="#" className={styles.reviews}>
            Отзывы
          </button>
          <button href="#" className={styles.cart}>
            Корзина
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLine;
