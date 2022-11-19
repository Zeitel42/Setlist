import React from "react";
import "../../style/index.css";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Table from "react-bootstrap/Table";

const Encore = () => {
  return (
    <div>
      <div>
        <h2>Encore </h2>

        <Button className="add-encore">
          <BsPlusCircle />
        </Button>
        <p>Add a Song</p>
      </div>
      <Table striped bordered condensed hover variant="dark">
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
            <td>Playing in the Band reprise</td>
            <td> {">"} </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Attics of My Life</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>One More Saturday Night</td>
            <td>{">"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Encore;
