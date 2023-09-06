import React, { useState } from 'react';
import Description from './Description/Description';
import Characteristics from './Сharacteristics/Characteristics';
import OrderInfo from './OrderInfo/OrderInfo';
import styles from './SubInfo.module.scss';
import { observer } from 'mobx-react-lite';

const SubInfo = observer(() => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <Description />;
      case 'characteristics':
        return <Characteristics />;
      case 'orderInfo':
        return <OrderInfo />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.subInfoWrapper}>
      <div className={styles.subInfoButtons}>
        <button onClick={() => setActiveTab('description')}>Описание</button>
        <button onClick={() => setActiveTab('characteristics')}>
          Характеристики
        </button>
        <button onClick={() => setActiveTab('orderInfo')}>
          Информация для заказа
        </button>
      </div>
      <div className={styles.subInfoContent}>{renderContent()}</div>
    </div>
  );
});

export default SubInfo;
