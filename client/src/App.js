import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import NewBooks from './Components/NewBooks/NewBooks';
import AboutUs from './Components/AboutUs/AboutUs';
import Contacts from './Components/Contacts/Contacts';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />
        <div className={styles.appWrapperContent}>
          <Navbar />
          <div className={styles.contentWrapper}>
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/news" element={<NewBooks />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />

              <Route path="/history" element={'Книги по истории'} />
              <Route path="/ZNO" element={'Книги по ЗНО'} />
              <Route path="/English" element={'Книги по английскому'} />
              <Route
                path="/Programming"
                element={'Книги по программированию'}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
