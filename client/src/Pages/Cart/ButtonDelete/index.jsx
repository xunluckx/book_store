import './style.scss';

const ButtonDelete = ({ deleteProduct, id }) => {
  return (
    <button
      className="deleteButton"
      type="button"
      onClick={() => {
        deleteProduct(id);
      }}
    >
      Удалить
    </button>
  );
};

export default ButtonDelete;
