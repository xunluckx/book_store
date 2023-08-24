import React, { useState } from 'react';

import { Button, Container } from 'react-bootstrap';
import CreateGenre from '../../Components/Modals/CreateGenre';
import CreateBook from '../../Components/Modals/CreateBook';
import CreateType from '../../Components/Modals/CreateType';

const Admin = () => {
  const [genreVisible, setGenreVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [bookVisible, setBookVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить Тип
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setGenreVisible(true)}
      >
        Добавить Жанр
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setBookVisible(true)}
      >
        Добавить Книгу
      </Button>
      <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)} />
      <CreateBook show={bookVisible} onHide={() => setBookVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
