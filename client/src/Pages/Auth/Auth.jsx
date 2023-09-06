import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
import { Context } from '../../index';
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../../utils/consts';
import { useContext, useState } from 'react';
import { login, registration } from '../../http/userAPI';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data.user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.container}>
        <div className={styles.authCard}>
          <h2 className={styles.authTitle}>
            {isLogin ? 'Авторизация' : 'Регистрация'}
          </h2>
          <div className={styles.authForm}>
            <input
              className={styles.emailInput}
              placeholder="Введите ваш email..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.passwordInput}
              placeholder="Введите ваш пароль..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.authButtons}>
              {isLogin ? (
                <div>
                  Нет аккаунта? <br />
                  <button
                    className={styles.registrationLink}
                    onClick={() => {
                      navigate(REGISTRATION_ROUTE);
                    }}
                  >
                    Зарегистрируйся!
                  </button>
                </div>
              ) : (
                <div>
                  Есть аккаунт? <br />
                  <button
                    className={styles.loginLink}
                    onClick={() => {
                      navigate(LOGIN_ROUTE);
                    }}
                  >
                    Войдите!
                  </button>
                </div>
              )}
              <button className={styles.authButton} onClick={click}>
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Auth;
