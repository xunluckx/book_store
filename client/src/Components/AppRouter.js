import styles from './AppRouter.module.scss';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { useContext } from 'react';
import { Context } from '../index';

function AppRouter() {
  const { user } = useContext(Context);
  return (
    <div className={styles.appRouterWrapper}>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;
