import React, { useState, useEffect } from "react";
import SongList from "../SongList/songList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SetSong = () => {
  const [song, setSong] = useState("Choose a song");

  const getSong = (value) => {
    setSong(`${value}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>{song}</p>
          </Col>
          <Col>
            <SongList callback={getSong} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SetSong;
