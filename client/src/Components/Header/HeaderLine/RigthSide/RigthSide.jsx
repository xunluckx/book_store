import { useContext } from 'react';
import styles from './RigthSide.module.scss';
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE } from '../../../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RigthSide = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <div className={styles.rightSide}>
      <button href="#" className={styles.reviews}>
        {i18n.t('headerLine.reviews')}
      </button>
      {user.isAuth ? (
        <div>
          <button
            className={styles.admin}
            onClick={() => navigate(ADMIN_ROUTE)}
          >
            {i18n.t('headerLine.admin')}
          </button>
          <button onClick={() => navigate(CART_ROUTE)} className={styles.cart}>
            {i18n.t('headerLine.cart')}
          </button>
          <button className={styles.auth} onClick={() => logOut()}>
            {i18n.t('headerLine.auth.exit')}
          </button>
        </div>
      ) : (
        <button
          className={styles.auth}
          onClick={() => {
            navigate(LOGIN_ROUTE);
          }}
        >
          {i18n.t('headerLine.auth.login')}
        </button>
      )}
    </div>
  );
});

export default RigthSide;
