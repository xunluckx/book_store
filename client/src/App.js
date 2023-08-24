import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import AppRouter from './Components/AppRouter';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation={'grow'} />;
  }
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />
        <div className={styles.appWrapperContent}>
          <AppRouter />
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
});

export default App;
