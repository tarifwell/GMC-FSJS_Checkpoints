import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const initialList = {
  title: "",
  date: "",
  rate: "",
  image: "",
};

const AddButton = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [film, setFilm] = useState(initialList);

  const addMovie = () => {
    if (
      film.title === "" ||
      film.date === "" ||
      film.rate === "" ||
      film.image === ""
    ) {
      alert("Remplir tous les champs!");
      return;
    }
    props.Addfilm(film);
    setFilm(initialList);
    setShow(false);
  };

  return (
    <div>
      <Button className="addBtnStyle" variant="primary" onClick={handleShow}>
        Ajouter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajoutez un film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="title">Titre</Form.Label>
              <Form.Control
                type="text"
                id="title"
                value={film.title}
                onChange={(e) => setFilm({ ...film, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="date">Date</Form.Label>
              <Form.Control
                type="text"
                id="date"
                value={film.date}
                onChange={(e) => setFilm({ ...film, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="rate">Score</Form.Label>
              <Form.Control
                type="text"
                id="rate"
                value={film.rate}
                onChange={(e) => setFilm({ ...film, rate: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="image">Image</Form.Label>
              <Form.Control
                type="text"
                id="image"
                value={film.image}
                onChange={(e) => setFilm({ ...film, image: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddButton;
