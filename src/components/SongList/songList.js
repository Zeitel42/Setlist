import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SongListModal = ({ callback }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  let choice = "";
  const songs = [
    {
      id: "1",
      name: "Touch of Grey",
    },
    {
      id: "2",
      name: "Hell in a Bucket",
    },
    {
      id: "3",
      name: "One More Saturday Night",
    },
    {
      id: "4",
      name: "Playing in the Band",
    },
    {
      id: "5",
      name: "St. Stephen",
    },
    {
      id: "6",
      name: "Bertha",
    },
    {
      id: "7",
      name: "Scarlet Begonias",
    },
    {
      id: "8",
      name: "Fire on the Mountain",
    },
    {
      id: "9",
      name: "Help on the Way",
    },
    {
      id: "10",
      name: "Franklin's Tower",
    },

    {
      id: "11",
      name: "Ramble on Rose",
    },
  ];
  const [songChoice, setSongChoice] = useState("");
  useEffect(() => {
    choice = songChoice;
    // console.log(choice);
  });

  return (
    <div>
      <Button onClick={showModal}>
        <BsPlusCircle />
      </Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body>
          <ListGroup as="ul" className="">
            {songs.map((song, id) => (
              <ListGroup.Item as="li" key={id}>
                <Row>
                  <Col>{song.name}</Col>
                  <Col>
                    <Button
                      onClick={() => {
                        setSongChoice(song.name);
                        callback(song.name);
                        setIsOpen(false);
                      }}
                    >
                      <BsPlusCircle />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SongListModal;
