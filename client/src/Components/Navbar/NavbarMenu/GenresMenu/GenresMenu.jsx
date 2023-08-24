import React, { useContext, useState } from 'react';
import styles from './GenresMenu.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../..';

const GenresMenu = observer(() => {
  const { book } = useContext(Context);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className={styles.collapseButton} onClick={toggleCollapse}>
        {isCollapsed ? (
          <img
            className={styles.collapseButtonOpen}
            src="https://cdn.icon-icons.com/icons2/1206/PNG/512/1491254405-plusaddmoredetail_82972.png"
            alt=""
          />
        ) : (
          <img
            className={styles.collapseButtonClose}
            src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904666-calculate-close-delete-hide-minimize-minus-remove_122516.png"
            alt=""
          />
        )}
      </button>
      {isCollapsed ? (
        <ul>
          {book.genres.map((genre) => (
            <li
              key={genre.id}
              className={
                genre.id === book.selectedGenre.id ? styles.active : ''
              }
              onClick={() => {
                book.setSelectedGenre(genre);
              }}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
});

export default GenresMenu;
