import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

const Setlist = () => {
  const daysToShow = 198 * 24 * 60 * 60 * 1000;
  const timeNow = new Date().getTime();
  const showTime = timeNow + daysToShow;

  return (
    <div>
      <div className="show-title w=80">
        <ListGroup horizontal>
          <Container>
            <ListGroup.Item className="band-name">
              <h1>Dead & Company</h1>
            </ListGroup.Item>
          </Container>
          <Container>
            <ListGroup.Item className="venue-name">
              <h1>Walnut Creek</h1>
            </ListGroup.Item>
          </Container>
          <Container>
            <ListGroup.Item className="show-date-time">
              <h1>June O1, 2023 7pm</h1>
              <Container>
                <CountdownTimer targetDate={showTime} />
              </Container>
            </ListGroup.Item>
          </Container>
        </ListGroup>
      </div>
      <div>
        <h5 className="countdown">Countdown to Showtime!</h5>
        <h4></h4>
      </div>
      <Container className="sets">
        <Container>
          <Card className="set-one">
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
          </Card>
        </Container>
        <Container>
          <Card className="set-two">
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
          </Card>
        </Container>
        <Container>
          <Card className="encore">
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
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default Setlist;
