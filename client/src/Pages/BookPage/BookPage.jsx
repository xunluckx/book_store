import { observer } from 'mobx-react-lite';
import MainInfo from './MainInfo/MainInfo';
import SubInfo from './SubInfo/SubInfo';

const BookPage = observer(() => {
  return (
    <div>
      <MainInfo />
      <SubInfo />
    </div>
  );
});

export default BookPage;
