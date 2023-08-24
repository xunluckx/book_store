import { BOOK_ROUTE } from '../../../utils/consts';
import styles from './BookItem.module.scss';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book }) => {
  const navigate = useNavigate();

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
          <div className={styles.bookIsAvaible}>В наличии</div>
        ) : (
          <div className={styles.bookNotAvaible}>Нет в наличии</div>
        )}
      </div>
      <div className={styles.bookButtonWrapper}>
        <button className={styles.bookBuyButton}>Купить</button>
      </div>
    </div>
  );
};

export default BookItem;
