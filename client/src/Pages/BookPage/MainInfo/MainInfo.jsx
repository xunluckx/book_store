import { useEffect, useState } from 'react';
import styles from './MainInfo.module.scss';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { fetchOneBook } from '../../../http/bookAPI';

const MainInfo = observer(() => {
  const [book, setBook] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneBook(id).then((data) => setBook(data));
  }, [id]);

  return (
    <div className={styles.bookPageWrapper}>
      <div className={styles.bookTitle}>{book.name}</div>
      <div className={styles.sidesWrapper}>
        <div className={styles.leftSide}>
          <div className={styles.bookImageWrapper}>
            <img
              className={styles.bookImage}
              src={process.env.REACT_APP_API_URL + book.img}
              alt=""
            />
          </div>
        </div>
        <div className={styles.rigthSide}>
          <div>
            {book.avaible === 1 ? (
              <div className={styles.bookIsAvaible}>В наличии</div>
            ) : (
              <div className={styles.bookNotAvaible}>Нет в наличии</div>
            )}
          </div>
          <div className={styles.bookPrice}>{book.price} ₴</div>
          <button className={styles.bookBuyButton}>Купить</button>
          <div className={styles.phoneNumber}>+38(099)123-22-33</div>
          <div className={styles.info}>
            <div>Условия оплаты и доставки</div>
            <div>График работы</div>
            <div>Адреса и контакты</div>
          </div>
          <div className={styles.returnСonditions}>
            <div>Условия возврата</div>
            <div className={styles.returnСonditionsInfo}>
              Возврат товара в течении 14 дней при договорённости
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainInfo;
