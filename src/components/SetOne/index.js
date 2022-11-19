import React from "react";
import "../../style/index.css";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Table from "react-bootstrap/Table";

const SetOne = () => {
  return (
    <div>
      <div>
        <h2>Set One </h2>

        <Button className="add-set-one">
          <BsPlusCircle />
        </Button>
        <p>Add a Song</p>
      </div>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Song Title</th>
            <th>Add {">"} for into</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Touch of Grey</td>
            <td>{">"}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Uncle John's Band</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>He's Gone</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SetOne;
