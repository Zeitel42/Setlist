import React, { useState } from "react";
import "../../../style/index.css";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import SetOneSongOne from "./SetOneSong1";
import SetOneSongTwo from "./SetOneSong2";
import SetOneSongThree from "./SetOneSong3";
import SetOneSongFour from "./SetOneSong4";
import SetOneSongFive from "./SetOneSong5";
import SetOneSongSix from "./SetOneSong6";
import SetOneSongSeven from "./SetOneSong7";
import SetOneSongEight from "./SetOneSong8";
import SetOneSongNine from "./SetOneSong9";
import SetOneSongTen from "./SetOneSong10";
import SetOneSongTest from "./SetOneSongTest";

const SetOne = () => {
  return (
    <div>
      <div>
        <h2>Set One </h2>
      </div>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Song Title</th>
          </tr>
        </thead>
        <tbody>
          <tr className="setOneSongOne">
            <td>1</td>
            <td className="songs">
              <SetOneSongOne />
            </td>
          </tr>
          <tr className="setOneSongTwo">
            <td>2</td>
            <td className="songs">
              <SetOneSongTwo />
            </td>
          </tr>
          <tr className="setOneSongThree">
            <td>3</td>
            <td className="songs">
              <SetOneSongThree />
            </td>
          </tr>
          <tr className="setOneSongFour">
            <td>4</td>
            <td className="songs">
              <SetOneSongFour />
            </td>
          </tr>
          <tr className="setOneSongFive">
            <td>5</td>
            <td className="songs">
              <SetOneSongFive />
            </td>
          </tr>
          <tr className="setOneSongSix">
            <td>6</td>
            <td className="songs">
              <SetOneSongSix />
            </td>
          </tr>
          <tr className="setOneSongSeven">
            <td>7</td>
            <td className="songs">
              <SetOneSongSeven />
            </td>
          </tr>
          <tr className="setOneSongEight">
            <td>8</td>
            <td className="songs">
              <SetOneSongEight />
            </td>
          </tr>
          <tr className="setOneSongNine">
            <td>9</td>
            <td className="songs">
              <SetOneSongNine />
            </td>
          </tr>
          <tr className="setOneSongTen">
            <td>10</td>
            <td className="songs">
              <SetOneSongTen />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SetOne;
