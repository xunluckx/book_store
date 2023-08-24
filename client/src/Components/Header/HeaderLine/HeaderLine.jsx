import styles from './HeaderLine.module.scss';
import LeftSide from './LeftSide/LeftSide';
import RigthSide from './RigthSide/RigthSide';

const HeaderLine = () => {
  return (
    <div className={styles.headerLineWrapper}>
      <div className={styles.container}>
        <LeftSide />
        <RigthSide />
      </div>
    </div>
  );
};

export default HeaderLine;
