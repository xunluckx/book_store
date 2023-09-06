import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { createBook, fetchGenres, fetchTypes } from '../../http/bookAPI';
import { observer } from 'mobx-react-lite';

const CreateBook = observer(({ show, onHide }) => {
  const { book } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchTypes().then((data) => book.setTypes(data));
    fetchGenres().then((data) => book.setGenres(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addBook = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('genreId', book.selectedGenre.id);
    formData.append('typeId', book.selectedType.id);
    formData.append('img', file);
    createBook(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {book.selectedType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {book.types.map((type) => (
                <Dropdown.Item
                  onClick={() => book.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {book.selectedGenre.name || 'Выберите жанр'}{' '}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {book.genres.map((genre) => (
                <Dropdown.Item
                  onClick={() => book.setSelectedGenre(genre)}
                  key={genre.id}
                >
                  {genre.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название книги"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-3"
            placeholder="Введите стоимость книги"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBook}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBook;
