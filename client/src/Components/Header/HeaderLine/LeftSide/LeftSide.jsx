import styles from './LeftSide.module.scss';

const LeftSide = () => {
  return (
    <div className={styles.leftSide}>
      <div className={styles.langButtons}></div>
      <button href="#" className={styles.langRu}>
        RU
      </button>
      <button href="#" className={styles.langUa}>
        UA
      </button>
    </div>
  );
};

export default LeftSide;
