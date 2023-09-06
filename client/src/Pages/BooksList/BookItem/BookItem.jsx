import React from 'react';
import { BOOK_ROUTE } from '../../../utils/consts';
import styles from './BookItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const addToCart = (e) => {
    console.log(e.target);
  };

  return (
    <div className={styles.bookItem}>
      <img
        className={styles.bookImage}
        onClick={() => navigate(BOOK_ROUTE + '/' + book.id)}
        src={process.env.REACT_APP_API_URL + book.img}
        alt=""
      />
      <div className={styles.bookContent}>
        <div
          className={styles.bookName}
          onClick={() => navigate(BOOK_ROUTE + '/' + book.id)}
        >
          {book.name}
        </div>

        <div>{book.price} ₴</div>
        {book.avaible === 1 ? (
          <div className={styles.bookIsAvaible}>{i18n.t('books.avaible')}</div>
        ) : (
          <div className={styles.bookNotAvaible}>
            {i18n.t('books.notAvaible')}
          </div>
        )}
      </div>
      <div className={styles.bookButtonWrapper}>
        <button onClick={addToCart} className={styles.bookBuyButton}>
          {i18n.t('books.buyButton')}
        </button>
      </div>
    </div>
  );
};

export default BookItem;
