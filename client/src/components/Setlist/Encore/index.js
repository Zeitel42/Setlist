import React, { useState } from "react";
import "../../../style/index.css";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import EncoreSongOne from "./EncoreSong1";
import EncoreSongTwo from "./EncoreSong2";
import EncoreSongThree from "./EncoreSong3";
import EncoreSongFour from "./EncoreSong4";

const Encore = () => {
  return (
    <div>
      <div>
        <h2>Encore</h2>
      </div>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="encoreSongOne">
            <td>1</td>
            <td className="songs">
              <EncoreSongOne />
            </td>
          </tr>
          <tr className="encoreSongTwo">
            <td>2</td>
            <td className="songs">
              <EncoreSongTwo />
            </td>
          </tr>
          <tr className="encoreSongThree">
            <td>3</td>
            <td className="songs">
              <EncoreSongThree />
            </td>
          </tr>
          <tr className="encoreSongFour">
            <td>4</td>
            <td className="songs">
              <EncoreSongFour />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Encore;
