import React from "react";
import "../../style/index.css";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Table from "react-bootstrap/Table";

const SetTwo = () => {
  return (
    <div>
      <div>
        <h2>Set Two </h2>

        <Button className="add-set-two">
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
            <td>Playing in the Band</td>
            <td>{">"}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>St. Stephen</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bird Song</td>
            <td>{">"}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Drums/Space</td>
            <td> {">"} </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Playing in the Band reprise</td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mississippi Half Step</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default SetTwo;
