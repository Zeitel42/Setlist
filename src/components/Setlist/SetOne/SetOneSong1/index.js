import React, { useState } from "react";
import SongList from "../../../SongList";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const SetOneSongOne = () => {
  const [songOne, setSongOne] = useState("");

  return (
    <div>
      <Link to="../SongList">
        <Button className="add-song-one">
          <BsPlusCircle />
        </Button>
      </Link>
    </div>
  );
};
export default SetOneSongOne;
