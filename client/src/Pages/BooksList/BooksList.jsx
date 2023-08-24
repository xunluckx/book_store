import styles from './BooksList.module.scss';
import BookItem from './BookItem/BookItem';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '../..';
import { fetchBooks, fetchGenres, fetchTypes } from '../../http/bookAPI';

const BooksList = observer(() => {
  const { book } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => book.setTypes(data));
    fetchGenres().then((data) => book.setGenres(data));
    fetchBooks(null, null).then((data) => {
      book.setBooks(data.rows);
    });
  }, []);

  useEffect(() => {
    fetchBooks(book.selectedType.id, book.selectedGenre.id).then((data) => {
      book.setBooks(data.rows);
    });
  }, [book.selectedType, book.selectedGenre]);

  return (
    <div className={styles.BooksListWrapper}>
      {book.books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
});

export default BooksList;
