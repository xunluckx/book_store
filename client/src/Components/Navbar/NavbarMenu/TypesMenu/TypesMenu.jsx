import React, { useContext, useState } from 'react';
import styles from './TypesMenu.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../..';

const TypesMenu = observer(() => {
  const { book } = useContext(Context);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

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
          {book.types.map((type) => (
            <li
              className={type.id === selectedType?.id ? styles.active : ''}
              key={type.id}
              onClick={() => {
                setSelectedType(type.id === selectedType?.id ? null : type);
                book.setSelectedType(type);
              }}
            >
              {type.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
});

export default TypesMenu;
