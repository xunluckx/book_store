import { useContext } from 'react';
import styles from './RigthSide.module.scss';
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../../../utils/consts';
import { useNavigate } from 'react-router-dom';

const RigthSide = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <div className={styles.rightSide}>
      <button href="#" className={styles.reviews}>
        Отзывы
      </button>
      {user.isAuth ? (
        <div>
          <button
            className={styles.admin}
            onClick={() => navigate(ADMIN_ROUTE)}
          >
            Админ Панель
          </button>
          <button href="#" className={styles.cart}>
            Корзина
          </button>
          <button className={styles.auth} onClick={() => logOut()}>
            Выйти
          </button>
        </div>
      ) : (
        <button
          className={styles.auth}
          onClick={() => {
            navigate(LOGIN_ROUTE);
          }}
        >
          Авторизация
        </button>
      )}
    </div>
  );
});

export default RigthSide;
