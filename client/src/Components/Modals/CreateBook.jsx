import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { createBook, fetchGenres, fetchTypes } from '../../http/bookAPI';
import { observer } from 'mobx-react-lite';

const CreateBook = observer(({ show, onHide }) => {
  const { book } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => book.setTypes(data));
    fetchGenres().then((data) => book.setGenres(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

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
    formData.append('info', JSON.stringify(info));
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
          <hr />
          <Button onClick={addInfo} variant={'outline-dark'}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo('title', e.target.value, i.number)
                  }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo('description', e.target.value, i.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={'outline-danger'}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
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
