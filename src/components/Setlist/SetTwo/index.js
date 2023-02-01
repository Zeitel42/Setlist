import React, { useState } from "react";
import "../../../style/index.css";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import SetTwoSongOne from "./SetTwoSong1";
import SetTwoSongTwo from "./SetTwoSong2";
import SetTwoSongThree from "./SetTwoSong3";
import SetTwoSongFour from "./SetTwoSong4";
import SetTwoSongFive from "./SetTwoSong5";
import SetTwoSongSix from "./SetTwoSong6";
import SetTwoSongSeven from "./SetTwoSong7";
import SetTwoSongEight from "./SetTwoSong8";
import SetTwoSongNine from "./SetTwoSong9";
import SetTwoSongTen from "./SetTwoSong10";

const SetOne = () => {
  return (
    <div>
      <div>
        <h2>Set Two </h2>
      </div>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="setTwoSongOne">
            <td>1</td>
            <td className="songs">
              <SetTwoSongOne />
            </td>
          </tr>
          <tr className="setTwoSongTwo">
            <td>2</td>
            <td className="songs">
              <SetTwoSongTwo />
            </td>
          </tr>
          <tr className="setTwoSongThree">
            <td>3</td>
            <td className="songs">
              <SetTwoSongThree />
            </td>
          </tr>
          <tr className="setTwoSongFour">
            <td>4</td>
            <td className="songs">
              <SetTwoSongFour />
            </td>
          </tr>
          <tr className="setTwoSongFive">
            <td>5</td>
            <td className="songs">
              <SetTwoSongFive />
            </td>
          </tr>
          <tr className="setTwoSongSix">
            <td>6</td>
            <td className="songs">
              <SetTwoSongSix />
            </td>
          </tr>
          <tr className="setTwoSongSeven">
            <td>7</td>
            <td className="songs">
              <SetTwoSongSeven />
            </td>
          </tr>
          <tr className="setTwoSongEight">
            <td>8</td>
            <td className="songs">
              <SetTwoSongEight />
            </td>
          </tr>
          <tr className="setTwoSongNine">
            <td>9</td>
            <td className="songs">
              <SetTwoSongNine />
            </td>
          </tr>
          <tr className="setTwoSongTen">
            <td>10</td>
            <td className="songs">
              <SetTwoSongTen />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SetOne;
