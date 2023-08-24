import styles from './SubInfo.module.scss';
import { observer } from 'mobx-react-lite';

const SubInfo = observer(() => {
  const book = {
    id: 1,
    name: 'Азбука',
    price: 100,
    avaible: 1,
    img: 'https://illustrators.ru/uploads/illustration/image/431745/main_431745_original.jpg',
    typeId: 1,
    genreId: 3,
  };
  return (
    <div className={styles.subInfoWrapper}>
      <div className={styles.subInfoButtons}>
        <button>Описание</button>
        <button>Характеристики</button>
        <button>Информация для заказа</button>
      </div>
    </div>
  );
});

export default SubInfo;
