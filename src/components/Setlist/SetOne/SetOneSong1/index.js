import React, { useState, useEffect } from "react";
import SongList from "../../../SongList";
// import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";

const SetOneSongOne = () => {
  const [songOne, setSongOne] = useState("Set One Opener");

  const getSong = (value) => {
    setSongOne(`${value}`);
  };

  return (
    <div>
      <p>{songOne}</p>
      <SongList callback={getSong} />
    </div>
  );
};
export default SetOneSongOne;
