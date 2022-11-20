import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";

const SongList = () => {
  const addToSet = () => {};

  const [songs] = useState([
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
  ]);

  return (
    <div>
      <header className="App-header">
        <h1>Song List</h1>
      </header>
      <ListGroup as="ul" className="">
        {songs.map((song) => (
          <ListGroup.Item as="li" key={song.name}>
            {song.name}
            <Button onClick={addToSet()} className="add-song-one">
              <BsPlusCircle />
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SongList;
