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
              <Button className="add-song-one">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongTwo">
            <td>2</td>
            <td className="songs">
              <SetOneSongTwo />
              <Button className="add-song-two">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongThree">
            <td>3</td>
            <td className="songs">
              <SetOneSongThree />
              <Button className="add-song-three">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongFour">
            <td>4</td>
            <td className="songs">
              <SetOneSongFour />
              <Button className="add-song-four">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongFive">
            <td>5</td>
            <td className="songs">
              <SetOneSongFive />
              <Button className="add-song-five">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongSix">
            <td>6</td>
            <td className="songs">
              <SetOneSongSix />
              <Button className="add-song-six">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongSeven">
            <td>7</td>
            <td className="songs">
              <SetOneSongSeven />
              <Button className="add-song-seven">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongEight">
            <td>8</td>
            <td className="songs">
              <SetOneSongEight />
              <Button className="add-song-eight">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongNine">
            <td>9</td>
            <td className="songs">
              <SetOneSongNine />
              <Button className="add-song-nine">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
          <tr className="setOneSongTen">
            <td>10</td>
            <td className="songs">
              <SetOneSongTen />
              <Button className="add-song-ten">
                <BsPlusCircle />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SetOne;
