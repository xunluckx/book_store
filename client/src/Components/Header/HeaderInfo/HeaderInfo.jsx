import styles from './HeaderInfo.module.scss';

const HeaderInfo = () => {
  return (
    <div className={styles.headerInfoWrapper}>
      <div className={styles.container}>
        <div className={styles.streetName}>
          Проспект Пушкина, дом Колотушкина
        </div>
        <div className={styles.phoneNumber}>Номер телефона</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
