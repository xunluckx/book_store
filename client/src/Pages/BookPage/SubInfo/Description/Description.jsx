import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Description.module.scss';
import { fetchOneBook } from '../../../../http/bookAPI';

const Description = () => {
  const [book, setBook] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneBook(id).then((data) => setBook(data));
  }, []);

  return (
    <div>
      <div className={styles.descriptionContent}>Описание</div>
    </div>
  );
};

export default Description;
